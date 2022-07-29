import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import styles from './../../styles/About.module.scss'

export default function About() {
  return (
    <div className={styles.container}>      
      <Head>
        <title>Onde Assistir - Sobre</title>
        <meta name="description" content="Saiba onde assistir aquele filme ou série que você tanto procura" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Sobre o Onde Assistir</h1>
        <div className={styles.about}>
          <p>
            Olá, me chamo Gleison Souza, tenho 35 anos e sou desenvolvedor web. 
            Eu havia feito um teste avaliativo para um cargo de desenvolvedor onde o desafio era desenvolver um site de filmes, e eu costumo pegar dicas de filmes e séries no tiktok, porém algumas vezes não sabemos onde há essa série ou filme disponível para assistir, então eu resolvi juntar o útil ao agradável  e desenvolver uma plataforma onde pudéssemos consultar em qual provedor assistir determinado conteúdo.

            Além disso, o Onde Assistir conta com indicações de filmes e séries, até mesmo os conteúdos relacionados as suas pesquisas, a ideia é implementar cada vez mais funcionalidades ao site, espero que gostem e usem bastante.

            Caso queira contribuir de alguma forma, envie suas dicas e/ou sugestões para: gleison.lsouza@gmail.com
          </p>
        </div>
        <h2>Refêrencias e agradecimentos</h2>
        <div className={styles.refer}>
          <h3>API dos filmes e séries</h3>
          <p>Deixo aqui meus agradecimentos ao pessoal do TMDB, excelente trabalho, obrigado a todos que contribuem para que essa api seja cada dia mais alimentada.</p>
          <Link href='https://www.themoviedb.org/?language=pt-BR' target='_blank' >www.themoviedb.org</Link>

          <h3>Listagem dos provedores</h3>
          <p>Agradeço ao pessoal do site Just Watch pelo fornecimento da lista de provedores, excelente!</p>
          <Link href='https://www.justwatch.com/br' target='_blank' >www.justwatch.com</Link>

          <h3>Imagens das bandeiras</h3>
          <p>Agradeço Flaticon por disponibilizar as imagens das bandeiras utilizadas nesse site.</p>
          <Link href='https://www.flaticon.com/' target='_blank' >www.flaticon.com</Link>

        </div>
                
      </main>
    </div>
  )
}
