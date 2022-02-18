import React, {useState} from 'react';
import '../index.css';

function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

  	return (
	    <section className="section contact-section">
			<div className="contact-section-container">
				<div className="contact-heading"><p>Contact Me</p></div>

				<div className="contact-section-description"><p>To discuss your projects with me in confidence, please use the form below to get in touch.</p></div>
				
				<div className="contact-wrapper">
					<div className="contact-form">
						<input type="text" placeholder="full name" value={name} onChange={(e) => setName(e.target.value)} required/>
						<input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
						<textarea placeholder="write your message here"></textarea>
						<button className="submit-btn" type="submit">Send</button>
					</div>

					<div className="contact-info">
						<div className="contact-info-cards">
							<div className="contact-info-card">
								<i className="fa fa-mobile" aria-hidden="true"></i>
								
								<div className="contact-info-text">
									<h4>Phone</h4>
									<p>+061 23459305</p>
								</div>
							</div>

							<div className="contact-info-card">
								<i className="fa fa-map-marker" aria-hidden="true"></i>
								
								<div className="contact-info-text">
									<h4>Address</h4>
									<p>Bay Area, California</p>
								</div>
							</div>

							<div className="contact-info-card">
								<i className="fa fa-envelope" aria-hidden="true"></i>
								
								<div className="contact-info-text">
									<h4>Email</h4>
									<p>heylandsarah@gmail.com</p>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
	    </section>
  	);
}

export default Contact;
