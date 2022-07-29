import styles from '../../styles/Search.module.scss'
import Head from 'next/head'
import { api } from '../../utils/config'
import { Router, useRouter } from 'next/router'
import Card from '../../components/Card/Card'

import { GetServerSideProps } from 'next'


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

interface SearchProps{
  filmsData: FilmProps[],
  seriesData: serieProps[],
  query:string,
}


  export const getServerSideProps: GetServerSideProps = async (context) => { 
    const query = context.params?.query; ;

    // Fetch data from external API
    const resSearch = await  api.get("/search/multi", {
      params: {
        query: query,
      },
    });

    const filmsData = resSearch.data.results.filter(({media_type}:any) => media_type === 'movie');

    const seriesData = resSearch.data.results.filter(({media_type}:any) => media_type === 'tv');    
  
    // Pass data to the page via props
    return { 
      props: { filmsData,seriesData,query},
    }
  }


export default function Search({filmsData,seriesData,query}:SearchProps) { 

  const router = useRouter();

  if(router.isFallback){
      return(
          <div>Carregando...</div>
      )
  }

    return (
      <div className={styles.container}>
        <Head>
          <title>Onde Assistir {query} ?</title>
          <meta name="description" content="Saiba onde assistir aquele filme ou série que você tanto procura" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}> 
        <section className={styles.listContent}>
          <div className={styles.description}>
            <h2>Filmes encontrados</h2>
            <p>Filmes encontrados para <span>{query}</span></p>
          </div>

          <div className={styles.listCard}>
            {filmsData && filmsData.map((film,index:number) => (
              <Card key={index} src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} title={film.title} alt={film.title} link={`/film/${film.id}`} similar={true} />
            ))}
          </div>          
        </section>

        <section className={styles.listContent}>
          <div className={styles.description}>
            <h2>Séries encontradas</h2>
            <p>Séries encontradas para <span>{query}</span></p>
          </div>

          <div className={styles.listCard}>
            {seriesData && seriesData.map((serie,index:number) => (
              <Card key={index} src={`https://image.tmdb.org/t/p/original/${serie.poster_path}`} title={serie.name} alt={serie.name} link={`/serie/${serie.id}`} similar={true}/>
            ))}
          </div>  
        </section>  
        </main>
      </div>
    )
  } 
