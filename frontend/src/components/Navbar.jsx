import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='options-nav'>
            <li>
                <a>About</a>
            </li>
            <li>
                <a>Collection</a>
            </li>
            <li>
                <a>Recipies</a>
            </li>
            <li>
                <a>Subscription</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar