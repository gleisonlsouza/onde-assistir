import Navbar from './../Navbar/Navbar'
import Footer from './../Footer/Footer'

import { ReactNode } from 'react'


type layoutProps ={
    children:ReactNode;
}

export default function Layout({ children}:layoutProps) {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    )
  }