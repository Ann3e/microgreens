import React, { useState } from 'react'
import "../styles/Navbar.css"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen((s) => !s)
  const close = () => setOpen(false)

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="nav-left">
          <a href="/" className="brand" onClick={close}>
            {/* replace text with an <img> if you have a logo */}
            MicroGreens
          </a>
        </div>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          onClick={toggle}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <ul
          id="primary-navigation"
          className={`options-nav ${open ? 'open' : ''}`}
          role="menu"
        >
          <li role="none"><a role="menuitem" href="#about" onClick={close}>About</a></li>
          <li role="none"><a role="menuitem" href="#collection" onClick={close}>Collection</a></li>
          <li role="none"><a role="menuitem" href="#recipes" onClick={close}>Recipes</a></li>
          <li role="none"><a role="menuitem" href="#subscription" onClick={close}>Subscription</a></li>
        </ul>
      </div>
    </nav>
  )
}