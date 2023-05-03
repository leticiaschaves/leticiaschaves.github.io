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
          className="resume"
          key={e.id}>
            <h2
            type="button">
              {e.title}
            </h2>
            <p>
              {e.content}
              </p>
          </article>
        ))
      }
    </section>
  );
}

export default AboutContent;
