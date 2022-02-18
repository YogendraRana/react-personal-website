import React from 'react';
import { NavLink } from 'react-router-dom';

import '../index.css';

import image from '../images/seven.jpg'

function Home() {
  return (
    <section id="home" className="section home-section">
    	<div className="home-section-container">
    		<div className="home-left-container">
    			<div className="home-text">
    				<h1>Sarah</h1>
    				<h2>Heyland</h2>
    				<button className="servics-btn" type="button"><NavLink to="/services" >Get Started</NavLink></button>
    			</div>
    		</div>

    		<div className="home-right-container">
    			<div className="home-image"><img src={image} /></div>
    			<div className="social">
    				<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
    				<li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
    				<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
    			</div>
    		</div>
    	</div>
    </section>
  );
}

export default Home;
