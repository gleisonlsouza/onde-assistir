import styles from '../../styles/Home.module.scss'
import Head from 'next/head'
import { api } from '../../utils/config'
import { Router, useRouter } from 'next/router'
import Card from '../../components/Card/Card'

import { GetServerSideProps } from 'next'


type serieProps = {
  name:string,
  description:string,
  id:string,
  poster_path:string,
}

type PagesProps ={
  page: number,
  total_pages:number,
}


interface SeriesProps{
  seriesData: serieProps[],  
  pages: PagesProps, 
}


  export const getServerSideProps: GetServerSideProps = async (context) => { 
    const page = 1;

    // Fetch data from external API
    const resSeries = await  api.get("/tv/popular", {
      params: {
        page: page,
      },
    });

    const seriesData = resSeries.data.results;
    const pages = {
      page: page,
      total_pages: resSeries.data.total_pages,
    };
  
    // Pass data to the page via props
    return { 
      props: { seriesData,pages },
    }
  }


export default function Series({seriesData,pages}:SeriesProps) { 

  const router = useRouter();

  if(router.isFallback){
      return(
          <div>Carregando...</div>
      )
  }

    return (
      <div className={styles.container}>
        <Head>
          <title>Onde Assistir</title>
          <meta name="description" content="Saiba onde assistir aquele filme ou série que você tanto procura" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}> 
          <section className={styles.listContent}>
            <div className={styles.description}>
              <h2>Séries em alta</h2>
              <p>Veja a lista das séries que estão em alta</p>
            </div>
  
            <div className={styles.listCard}>
              {seriesData && seriesData.map((serie:serieProps,index:number) => (
                <Card key={index} src={`https://image.tmdb.org/t/p/original/${serie.poster_path}`} title={serie.name} alt={serie.name} link={`/serie/${serie.id}`}/>
              ))}
            </div>
            <div className={styles.pagination}>
                {pages.page <= 1 ? (
                  <button disabled>Voltar</button>
                ):(
                  <button onClick={() => router.push(`/series/${pages.page -1}`) }>Voltar</button>
                )} 
                <span>
                  Exibindo {pages.page} de {pages.total_pages}
                </span> 
                {pages.page >= pages.total_pages ? (
                  <button disabled>Avançar</button>
                ):(
                  <button onClick={() => router.push(`/series/${pages.page +1}`)}>Avançar</button>
                )} 
            </div>          
          </section>
        </main>
      </div>
    )
  } 
