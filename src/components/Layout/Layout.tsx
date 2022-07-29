import Navbar from './../Navbar/Navbar'
import Footer from './../Footer/Footer'
import Search from '../Search/Search'

import { ReactNode } from 'react'


type layoutProps ={
    children:ReactNode;
}

export default function Layout({ children}:layoutProps) {
    return (
      <>
        <Navbar />
        {/* <Search /> */}
        <main>{children}</main>
        <Footer />
      </>
    )
  }