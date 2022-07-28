import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import watchImage from './../../public/assets/images/wherewatch.jpg'

import { GetStaticProps } from 'next'


// Components
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card/Card'

// Axios
import {api} from './../utils/config'

 
  export const getStaticProps: GetStaticProps = async (context) => {    

    // Fetch data from external API
    const resFilms = await  api.get("/movie/now_playing", {
      params: {
        page: 1,
      },
    });

    const resSeries = await  api.get("/tv/popular", {
      params: {
        page: 1,
      },
    });

    const filmsData = resFilms.data.results.slice(0,10);
    const seriesData = resSeries.data.results.slice(0,10);
  
    // Pass data to the page via props
    return { 
      props: { filmsData,seriesData },
      revalidate: 86400, 
    }
  }

  type FilmProps = {
    title:string,
    description:string,
    id:string,
    poster_path:string,
  }

  type serieProps = {
    name:string,
    description:string,
    id:string,
    poster_path:string,
  }

  interface HomeProps{
    filmsData: FilmProps[],
    seriesData: serieProps[],
  }

const Home: NextPage<HomeProps> = ({filmsData,seriesData}) => {

  

  return (
    <div className={styles.container}>
      <Head>
        <title>Onde Assistir</title>
        <meta name="description" content="Saiba onde assistir aquele filme ou série que você tanto procura" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.mainContent}>
          <div className={styles.mainText}>
            <h1>Onde Assistir ?</h1>
            <p>Sabe aquela série ou aquele filme que você viu no tiktok mas não sabe onde assistir? Então, aqui você encontra!</p> 
            <p>Além de dicas dos filmes e séries que estão em alta!</p> 
            <p>Em breve estaremos disponibilizando novas funcionalidades</p> 
          </div> 
          <div className={styles.mainImage}>
            <Image 
              src={watchImage}
              objectFit='cover'
              alt='Main image'
            />
          </div>        
        </section>

        <section className={styles.listContent}>
          <div className={styles.description}>
            <h2>Filmes em alta</h2>
            <p>Veja a lista dos melhores filmes do momento</p>
          </div>

          <div className={styles.listCard}>
            {filmsData && filmsData.map((film,index:number) => (
              <Card key={index} src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} title={film.title} alt={film.title} link={`/film/${film.id}`}/>
            ))}
          </div>          
        </section>

        <section className={styles.listContent}>
          <div className={styles.description}>
            <h2>Séries em alta</h2>
            <p>Veja a lista das séries que estão em alta</p>
          </div>

          <div className={styles.listCard}>
            {seriesData && seriesData.map((serie,index:number) => (
              <Card key={index} src={`https://image.tmdb.org/t/p/original/${serie.poster_path}`} title={serie.name} alt={serie.name} link={`/serie/${serie.id}`}/>
            ))}
          </div>          
        </section>
      </main>
    </div>
  )
}

export default Home
