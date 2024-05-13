import React from 'react'
import Navbar from './navbar/Navbar'
import Cards from './card/Cards'
import Categories from './category/Categories'
import Prom from './prom/Prom'
import Blog from './blog/Blog'
import Deals from './deals/Deals'
import Cheff from './cheff/Cheff'
import Email from './email/Email'
import Footer from './footer/Footer'
import Hero from './hero/Hero'
import Who from './who/Who'

const HomePage = () => {
  return (
    <main>
      <Navbar/>
      <Hero />
      <Cards/>
      <Categories />
      <Prom />
      <Blog />
      <Deals />
      <Who />
      <Cheff />
      <Email />
      <Footer />

    </main>
  )
}

export default HomePage