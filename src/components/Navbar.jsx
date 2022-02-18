import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'

const activeStyle = {
	borderBottom: "2px solid white",
}

function Navbar(){
	return <>
		<nav className="navigation-bar">
			<NavLink to="/"><div className="logo">Sarah<span>Heyland</span></div></NavLink>

			<ul>
				<li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
				<li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
				<li><NavLink exact to="/services" activeStyle={activeStyle}>Services</NavLink></li>
				<li><NavLink exact to="/portfolio" activeStyle={activeStyle}>Portfolio</NavLink></li>
				<li><NavLink exact to="/blog" activeStyle={activeStyle}>Blog</NavLink></li>
				<li><NavLink exact to="/contact" activeStyle={activeStyle}>Contact</NavLink></li>
			</ul>
		</nav>
	</>
}

export default Navbar;