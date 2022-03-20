import React from 'react'
import Header from '../../container/Header/Header'
import CollectionHero from '../../container/CollectionHero/CollectionHero'
import CollectionData from '../../container/CollectionData/CollectionData'
import Footer from '../../container/Footer/Footer'
function Collection() {
  return (
    <div>
        <Header />
        <CollectionHero />
        <CollectionData />
        <Footer />
    </div>
  )
}

export default Collection