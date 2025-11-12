import React from 'react'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Marquee/>
    </div>
  )
}

export default App