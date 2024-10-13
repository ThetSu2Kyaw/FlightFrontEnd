import React from 'react';
import '../assets/scss/About.scss';

export default function About() {
  return (
    <div>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div>
              <img src="images/about-bg.jpg" alt="" />
            </div>
            <div className="about-text">
              <div className="title">
                <h2>Catherine Doe</h2>
                <p>art & design is my passion</p>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestiae architecto veritatis, laudantium explicabo perferendis adipisci asperiores sint libero necessitatibus quia excepturi, iste, tenetur maiores ducimus. Eligendi consequuntur dolores delectus!</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </section>
      {/* end of about */}
    </div>
  )
}
