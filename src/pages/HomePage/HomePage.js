import React from 'react'
import './HomePage.css';
import Header from '../../container/Header/Header';
import Hero from '../../container/Hero/Hero';
import Servic from '../../container/Servic/Servic';
import Categores from '../../container/Categores/Categores';
import Organic from '../../container/Organic/Organic';
import Product from '../../container/Product/Product';
import FreshOverflow from '../../container/FreshOverflow/FreshOverflow';
import Rated from '../../container/Rated/Rated';
import Partner from '../../container/Partner/Partner';
import Footer from '../../container/Footer/Footer';
function HomePage() {
  return (
    <div>
       <Header />
       <Hero />
       <Servic />
       <Categores />
       <Organic />
       <Product />
       <FreshOverflow />
       <Rated />
       <Partner />
       <Footer />
    </div>
  )
}
export default HomePage