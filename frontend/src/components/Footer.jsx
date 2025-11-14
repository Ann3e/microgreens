import React from 'react'
import "../styles/Footer.css"

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-inner">
				<p>© {new Date().getFullYear()} MicroGreens. All rights reserved.</p>
				<nav className="footer-nav">
					<a href="#about">About</a>
					<a href="#collection">Collection</a>
					<a href="#recipes">Recipes</a>
					<a href="#subscription">Subscription</a>
				</nav>
			</div>
		</footer>
	)
}

