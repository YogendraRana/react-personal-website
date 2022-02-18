import React from 'react';
import '../index.css';
import ServicesData from '../json/Services';

function Services() {
  return (
    <section className="section services-section">
    	<div className="services-section-container">
    		<div className="service-heading">
    			<p>What services do I offer?</p>
    		</div>

			<div className="services-wrapper">
				{
					ServicesData.map((service) => {
						return <>
							<div key={service.id} className="service-card">
								{service.icon}
								{service.title}
							</div>
						</>	
					})
				}				
			</div>
		</div>
    </section>
  );
}

export default Services;
