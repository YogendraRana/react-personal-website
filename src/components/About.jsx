import React from 'react';

//importing css
import '../index.css';

//importing image
import portrait from '../images/one.jpg'

function About(props) {
	return (
	<section id="about" className="section about-section">
		<div className="about-section-container">
			<div className="about-left-container">
				<div className="about-image">
					<img src={portrait} alt={portrait}/>
				</div>
			</div>

			<div className="about-right-container">
				<div className="about-paragraph">
					<p><h2>Hello everyone,</h2> I am Sarah Heyland from California, USA. I am a web developer and software engineer. I am B.Sc.CSIT Bachelor Degree holder. I completed my college in the year 2020 and it has already been 2 years since I started working as professional software engineer. I completed my college in the year 2020 and it has already been 2 years since I started working as professional software engineer.</p>
				</div>

				<div className="buttons">
					<button className="hire-btn">Hire Me</button>
					<button className="cv-btn">Download CV</button>
				</div>
			
			</div>
		</div>
	</section>
	);
}

export default About;
