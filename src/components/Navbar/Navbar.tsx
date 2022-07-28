import React from 'react'
import styles from './../../styles/Navbar.module.scss'

import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link';

const Navbar = () => {
    
    const handleClick = () => {

        const menu:HTMLElement | null = document.getElementById('links');
        if(menu){
            menu.classList.toggle(styles.active)
        }
        
    }

  return (
    <nav className={styles.navbar}>
        <div className={`${styles.links}`} id='links'>
            <ul className={styles.listLinks}>
                <li>
                    <Link href='/'><a onClick={() => handleClick()}>Home </a></Link>
                </li> 
                <li>
                    <Link href='/'><a onClick={() => handleClick()}>Filmes</a></Link>
                </li> 
                <li>
                    <Link href='/' ><a onClick={() => handleClick()}>Séries</a></Link>
                </li> 
            </ul>   
        </div>              
        <div className={styles.buttonColapse}>
            <AiOutlineMenu onClick={() => handleClick()}/>
        </div>
    </nav>
  )
}

export default Navbar