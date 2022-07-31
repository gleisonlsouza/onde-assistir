import React, { useState } from 'react'

import Image from 'next/future/image'

import styles from './../../styles/Film.module.scss'

import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { api } from '../../utils/config'
import { useRouter } from 'next/router'
import WatchProvider from '../../components/WatchProvider/WatchProvider'
import Card from '../../components/Card/Card'
import Loader from './../../components/Loader/Loader'


type FilmProps = {
  title:string,
  overview:string,
  id:string,
  backdrop_path:string,  
  poster_path:string,
  release_date:string,
  runtime:number,
  genres:[{
    id:number,
    name:string,
  }   
  ],
}

type FilmProviderProps = {
  [key:string]:any,  
  flatrate:[
    {
        logo_path:string,
        provider_name:string,   
    }
  ],
  buy:[
      {
          logo_path:string,
          provider_name:string,   
      }
  ],
  rent:[
    {
        logo_path:string,
        provider_name:string,   
    }
]
}

type ReleaseDateProps = {
  certification:string,
  release_date:string,
}

interface iFilmProps{
  filmData: FilmProps,
  filmProvider: FilmProviderProps,
  releaseDate: ReleaseDateProps,
  similarFilms: FilmProps[],
}

/* export const getStaticPaths:GetStaticPaths = async(context) => {
  // Fetch data from external API
  const resFilms = await  api.get("/movie/now_playing");
  
  const filmsData = resFilms.data.results;

  // params
  const paths = filmsData.map((film:FilmProps) => {
      return {
          params: {filmId: film.id.toString() || null},
      }
  })

  return{
      paths,
      fallback: true,
  }
  
} */


export const getServerSideProps: GetServerSideProps = async (context) => {    

  const id = context.params?.filmId; 

  // Fetch data from external API
  const resFilms = await  api.get(`/movie/${id}`,{
    params:{
      append_to_response:'release_dates,similar'
    }
  });  
  const resProvider = await  api.get(`/movie/${id}/watch/providers`);  

  const filmData = resFilms.data;
  const filmProvider = resProvider.data.results;
  const releaseDateBR = filmData.release_dates.results.filter(({iso_3166_1}:any) => iso_3166_1 === 'BR');  
  const releaseDate = await releaseDateBR.length > 0 ? releaseDateBR[0].release_dates[0] :  null;
  const similarFilms = await filmData.similar.results;
  
 

  // Pass data to the page via props
  return { 
    props: { filmData,filmProvider,releaseDate,similarFilms },
  }
}


export default function Film({filmData,filmProvider,releaseDate,similarFilms}:iFilmProps) {

  const router = useRouter();

    if(router.isFallback){
        return(
            <Loader />
        )
    }

    
    const timeFilm = (min:number) => {
      var hours = (min / 60);
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);
      return `${rhours}h ${rminutes}min`;
    }
    

    

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Onde Assistir ${filmData.title} ?`}</title>
        <meta name="description" content={`Saiba onde assistir! ${filmData.overview}`}  />   
        <meta property="og:image" content={`https://image.tmdb.org/t/p/original/${filmData.poster_path}`}/>
        <meta property="og:description" content={`Saiba onde assistir! ${filmData.overview}`} />
        <meta property="og:title" content={`Onde Assistir ${filmData.title} ?`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content='https://ondeassistir.vercel.app/' />
        <meta property="og:site_name" content="Onde assisitr? Agora você sabe!" />        
        

        <meta name="twitter:card" content="summary" />
        <meta property="twitter:image" content={`https://image.tmdb.org/t/p/original/${filmData.poster_path}`} />
        <meta property="twitter:description" content={`Saiba onde assistir! ${filmData.overview}`} />
        <meta property="twitter:title" content={`Onde Assistir ${filmData.title} ?`} />
        <meta property="twitter:url" content="https://ondeassistir.vercel.app/" />        
      </Head>
      <main className={styles.main}>
        <section className={styles.mainContent}>
          <div className={styles.mainText}>
            <h1>{filmData.title}</h1>
            <div className={styles.filmInfo}>              
              <div className={styles.genres}>
                <div className={styles.certification}>
                  {releaseDate ? releaseDate['certification'] : '?'}
                </div>
                <span>{new Date(filmData.release_date).toLocaleDateString('pt-BR')}</span>
                <span>{timeFilm(filmData.runtime)}</span>
                <span>
                  {filmData.genres.map((genre,index) => (
                    index === 0 ? `${genre.name}` :  ` • ${genre.name}`
                  ))}
                </span>
              </div>
            </div>
            <p>{filmData.overview}</p>    
            <div className={styles.providers}>
              <div className={styles.providersTitle}>
                <h2>Onde Assistir?</h2>                
              </div>
              <div className={styles.providersContent}>
                <WatchProvider providers={filmProvider} />                
              </div>
            </div>          
          </div> 
          <div className={styles.mainImage}>
            <Image 
              src={`https://image.tmdb.org/t/p/original/${filmData.backdrop_path}`}
              height={500}
              width={1000}
              alt='Main image'
            />
          </div> 
                
        </section>

        <section className={styles.similarContent}> 
          <div className={styles.similarTitle}>
            <h2>Veja também</h2>
            <p>Títulos parecidos com o que você está vendo</p>
          </div>          
          <div className={styles.similar}>
            {similarFilms && similarFilms.map((film,index) => (
              <Card 
                key={index} 
                src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} 
                title={film.title} 
                alt={film.title} 
                link={`/film/${film.id}`}
                similar={true}
              />
              ) )}
          </div> 
        </section>
      </main>
    </div>
  )
}
