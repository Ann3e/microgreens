import React from 'react'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
// import Caraousal from './components/Carousal'
import Carousal from './components/Carousal';
import { microgreensProducts } from './data/products';
// import ProductCarousel from './components/ProductCarousel'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Marquee/>
      {/* <ProductCarousel/> */}
      <Carousal  products={microgreensProducts}/>
    </div>
  )
}

export default App