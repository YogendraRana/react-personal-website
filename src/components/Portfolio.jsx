import React, {useState, useEffect} from 'react';
import '../index.css';
import GalleryData from '../json/Gallery';

function Portfolio() {
	const [tag, setTag] = useState('all');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(() => {
		tag === 'all' ? setFilteredImages(GalleryData) : setFilteredImages(GalleryData.filter(img => img.tag === tag))
	}, [tag]);

	return (
		<section className="section portfolio-section">
			<div className="portfolio-section-container">
				<div className="filter-buttons">
					<div className="filter-button" onClick={() => setTag('all')}>all</div>
					<div className="filter-button" onClick={() => setTag('one')}>one</div>
					<div className="filter-button" onClick={() => setTag('two')}>two</div>
					<div className="filter-button" onClick={() => setTag('three')}>three</div>
				</div>

				<div className="portfolio-wrapper">
					{
						filteredImages.map(img => <div key={img.id} className="gallery-card"><img src={img.imgsrc} alt={img.imgsrc} /></div>)
					}
				</div>
			</div>
		</section>
  	);
}

export default Portfolio;