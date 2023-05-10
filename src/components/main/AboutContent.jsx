import React from 'react';
import './AboutContent.css';
import { data } from '../data/data';

function AboutContent() {  
  return (
    <section className="about" id="about">
      <h3>
        Sobre nós
      </h3>
      {
        data.map((e) => (
          <article
          className="flip-card"
          key={e.id}>
            <div className='inner'>
              <div className='front'>
                <h2
                  type="button">
                    {e.title}
                </h2>
              </div>
              <div className='back'>
                <p>
                  {e.content}
                </p>
              </div>
            </div>
          </article>
        ))
      }
    </section>
  );
}

export default AboutContent;

// <div class="flip-card">
//     <div class="flip-card-inner">
//         <div class="flip-card-front">
//             <p class="title">FLIP CARD</p>
//             <p>Hover Me</p>
//         </div>
//         <div class="flip-card-back">
//             <p class="title">BACK</p>
//             <p>Leave Me</p>
//         </div>
//     </div>
// </div>