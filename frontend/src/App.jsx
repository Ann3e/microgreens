import React from 'react'
import Navbar from './components/Navbar'
import Process from './components/Process'
// import Caraousal from './components/Carousal'
// import Carousal from './components/Carousal';
import { microgreensProducts } from './data/products';
import Hero from './components/Hero';
// import the page component (ensure pages/index.jsx exports default)
import Home from './pages/index';
import Features from './components/Features';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Process />
      <Home/>
      {/* <Carousal  products={microgreensProducts}/> */}
      <Features/>
      <Footer/>
    </div>
  )
}

export default App