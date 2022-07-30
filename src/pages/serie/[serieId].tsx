import React, { useState } from 'react'

import Image from 'next/future/image'

import styles from './../../styles/Film.module.scss'

import { GetStaticProps,GetStaticPaths, GetStaticPropsContext, GetStaticPathsContext } from 'next'
import Head from 'next/head'
import { api } from '../../utils/config'
import { useRouter } from 'next/router'
import WatchProvider from '../../components/WatchProvider/WatchProvider'
import Card from '../../components/Card/Card'
import Loader from '../../components/Loader/Loader'


type SerieProps = {
  name:string,
  overview:string,
  id:string,
  backdrop_path:string,  
  poster_path:string,
  first_air_date:string,
  runtime:number,  
  genres:[{
    id:number,
    name:string,
  }   
  ],
}

type SerieProviderProps = {
  [key:string]:any,  
  flatrate:[
    {
        logo_path:string,
        provider_name:string,   
    }
  ],  
}

type RatingProps = {
  rating:string,
}

interface iSerieProps{
  serieData: SerieProps,
  serieProvider: SerieProviderProps,
  rating: RatingProps,
  similarSeries: SerieProps[],
}

export const getStaticPaths:GetStaticPaths = async(context) => {
  // Fetch data from external API
  const resSeries = await  api.get("/tv/popular");
  
  const seriesData = resSeries.data.results;

  // params
  const paths = seriesData.map((serie:SerieProps) => {
      return {
          params: {serieId: serie.id.toString() || null},
      }
  })

  return{
      paths,
      fallback: true,
  }
  
}


export const getStaticProps: GetStaticProps = async (context) => {    

  const id = context.params?.serieId; 

  // Fetch data from external API
  const resSerie= await  api.get(`/tv/${id}`,{
    params:{
      append_to_response:'similar,content_ratings'
    }
  });  
  const resProvider = await  api.get(`/tv/${id}/watch/providers`);  

  const serieData = resSerie.data;
  const serieProvider = resProvider.data.results;
  const ratingData = serieData.content_ratings.results.filter(({iso_3166_1}:any) => iso_3166_1 === 'BR');  
  const rating = await ratingData.length > 0 ? ratingData[0] :  null;
  const similarSeries = await serieData.similar.results;
  //const rating = ['']
  
 

  // Pass data to the page via props
  return { 
    props: { serieData,serieProvider,rating,similarSeries },
    revalidate: 86400, 
  }
}


export default function Serie({serieData,serieProvider,rating,similarSeries}:iSerieProps) {

  const router = useRouter();

    if(router.isFallback){
        return(
          <Loader />
        )
    }
    

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Onde Assistir ${serieData.name} ?`}</title>
        <meta name="description" content={`Saiba onde assistir! ${serieData.overview}`}  />   
        <meta property="og:image" content={`https://image.tmdb.org/t/p/original/${serieData.poster_path}`}/>
        <meta property="og:description" content={`Saiba onde assistir! ${serieData.overview}`} />
        <meta property="og:title" content={`Onde Assistir ${serieData.name} ?`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content='https://ondeassistir.vercel.app/' />
        <meta property="og:site_name" content="Onde assisitr? Agora você sabe!" />        
        

        <meta name="twitter:card" content="summary" />
        <meta property="twitter:image" content={`https://image.tmdb.org/t/p/original/${serieData.poster_path}`} />
        <meta property="twitter:description" content={`Saiba onde assistir! ${serieData.overview}`} />
        <meta property="twitter:title" content={`Onde Assistir ${serieData.name} ?`} />
        <meta property="twitter:url" content="https://ondeassistir.vercel.app/" />        
      </Head>
      <main className={styles.main}>
        <section className={styles.mainContent}>
          <div className={styles.mainText}>
            <h1>{serieData.name}</h1>
            <div className={styles.filmInfo}>              
              <div className={styles.genres}>
                <div className={styles.certification}>
                  {rating ? rating['rating'] : '?'}
                </div>
                <span>{new Date(serieData.first_air_date).toLocaleDateString('pt-BR')}</span>                
                <span>
                  {serieData.genres.map((genre,index) => (
                    index === 0 ? `${genre.name}` :  ` • ${genre.name}`
                  ))}
                </span>
              </div>
            </div>
            <p>{serieData.overview}</p>   
            <div className={styles.providers}>
              <div className={styles.providersTitle}>
                <h2>Onde Assistir?</h2>                
              </div>
              <div className={styles.providersContent}>
                <WatchProvider providers={serieProvider} />                
              </div>
            </div>   
            {/* <div className={styles.similar}>
              <div className={styles.similarTitle}>
                <h2>Veja também</h2>
              </div>
              <div className={styles.similarContent}>
                {similarSeries && similarSeries.map((serie,index) => (
                  <Card 
                    key={index} 
                    src={`https://image.tmdb.org/t/p/original/${serie.poster_path}`} 
                    title={serie.name} 
                    alt={serie.name} 
                    link={`/serie/${serie.id}`}
                    similar={true}
                    />
                ) )}
              </div>
            </div>  */}         
          </div> 
          <div className={styles.mainImage}>
            <Image 
              src={`https://image.tmdb.org/t/p/original/${serieData.backdrop_path}`}
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
            {similarSeries && similarSeries.map((serie,index) => (
              <Card 
                key={index} 
                src={`https://image.tmdb.org/t/p/original/${serie.poster_path}`} 
                title={serie.name} 
                alt={serie.name} 
                link={`/serie/${serie.id}`}
                similar={true}
                />
                ) )}
          </div> 
        </section>
      </main>
    </div>
  )
}
