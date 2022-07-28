import React from 'react'
import styles from './../../styles/Card.module.scss'

import Image from 'next/future/image'
import { useRouter } from 'next/router'

type CardProps ={
    src: string,
    alt:string,
    title:string,
    link:string,
    similar?:boolean,
}


export default function Card({src,alt,title,link,similar=false}:CardProps) {

  const router = useRouter();

  return (
    <>
        {!similar ? (
          <div className={styles.card} onClick={() => router.push(link)}>              
            <Image src={src} width={500} height={500} alt={alt} />
            <div className={styles.cardText}>
              <h4>{title}</h4> 
            </div>  
          </div>
        ):(
          <div className={styles.card} onClick={() => router.push(link)}>              
            <Image src={src} width={500} height={500} alt={alt} />            
          </div>
        )}
        
    </>
  )
}
