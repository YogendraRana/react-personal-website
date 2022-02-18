import React from 'react';
import '../index.css';

//importing images
import One from '../images/one.jpg';
import Two from '../images/two.jpg';
import Three from '../images/three.jpg';
import Five from '../images/five.jpg';
import Six from '../images/six.jpg';
import Seven from '../images/seven.jpg';

function BlogItem(props) {
    return <>
        <div className="blog-card">
            <img src={props.imgsrc} alt={props.imgsrc} className="blog-img" />                
            <div className="card-link">
                <h4>{props.title}</h4>
                <p>{props.field} | {props.date}</p>
                <a href="#" class="blog-link">Read More</a>
            </div>
        </div>
    </>
}

function Blog() {
  return (
    <section className="section blog-section">
    	<div className="blog-section-container">
    		<div className="blog-wrapper">
                <div className="blog-cards">
                    <input type="radio" name="radio-btn" id="radio1" defaultChecked/>
                    <input type="radio" name="radio-btn" id="radio2" />
                    <input type="radio" name="radio-btn" id="radio3" />

                    <div className="slide first">
                        <BlogItem imgsrc={One} title="How to build website?" field="Tech" date="12 August, 2020" />
                        <BlogItem imgsrc={Two} title="Learn Html, CSS and JavaScript" field="Web" date="12 August, 2020"  />
                        <BlogItem imgsrc={Three} title="Learn Backend with PHP" field="Backend" date="12 August, 2020"  />
                    </div>

                    <div className="slide">
                        <BlogItem imgsrc={Three} title="Learn ReactJS" field="UI/UX" date="12 August, 2020" />
                        <BlogItem imgsrc={Five} title="Powering React App with Node.js in backend" field="Backend" date="12 August, 2020"  />
                        <BlogItem imgsrc={Six} title="Roadmap to React Native" field="React Native" date="12 August, 2020" />
                    </div>

                    <div className="slide">
                        <BlogItem imgsrc={Seven} title="Roadmap to Java Developer" field="Java" date="12 August, 2020" />
                        <BlogItem imgsrc={One} title="Game Developmnt" field="Game" date="12 August, 2020"  />
                        <BlogItem imgsrc={Six} title="Unity vs. Unreal" field="Game" date="12 August, 2020" />    
                    </div>
                </div>

                <div className="manual-navigation">
                    <label for="radio1" className="manual-btn manual-btn1"></label>
                    <label for="radio2" className="manual-btn manual-btn2"></label>
                    <label for="radio3" className="manual-btn manual-btn3"></label>
                </div>
    		</div>
    	</div>
    </section>
  );
}

export default Blog;
