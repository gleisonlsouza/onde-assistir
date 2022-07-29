import React from 'react'
import styles from './../../styles/Navbar.module.scss'

import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link';
import Image from 'next/image';
import logo from './../../../public/assets/images/logo.png'

import { useRouter } from 'next/router';
import Search from '../Search/Search';

const Navbar = () => {

    const router = useRouter();
    
    const handleClick = () => {

        const menu:HTMLElement | null = document.getElementById('links');
        if(menu){
            menu.classList.toggle(styles.active)
        }
        
    }

  return (
    <nav className={styles.navbar}>
        <div className={styles.logoAndButton}>
            <div className={styles.logo} onClick={() => router.push('/')}>
                    <Image src={logo} width={200} height={50} alt='Logo Onde Assistir' />
            </div>
            <div className={styles.buttonColapse}>
                <AiOutlineMenu onClick={() => handleClick()}/>
            </div>
        </div>
        <div className={`${styles.links}`} id='links'>            
            <ul className={styles.listLinks}>
                <li>
                    <Link href='/'><a onClick={() => handleClick()}>Home </a></Link>
                </li> 
                <li>
                    <Link href='/films'><a onClick={() => handleClick()}>Filmes</a></Link>
                </li> 
                <li>
                    <Link href='/series' ><a onClick={() => handleClick()}>Séries</a></Link>
                </li> 
                <li>
                    <Link href='/about' ><a onClick={() => handleClick()}>Sobre</a></Link>
                </li>                 
            </ul>                    
        </div>
        <div className={styles.search}>
                <Search />
        </div>                   
        
    </nav>
  )
}

export default Navbar