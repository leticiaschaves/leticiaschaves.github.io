import React from 'react';
import './AboutContent.css';
import data from '../data/data';

function AboutContent() {
 const {
    about,
    mission,
    vision,
    values,
  } = data[0];
  
  return (
    <section className="about" id="about">
      <article className="resume">
        <h3>Quem somos</h3>
        <p>{about}</p>
      </article>
      <article className="resume">
        <h3
          type="valores">
            Valores
        </h3>
        <p>{values}</p>
      </article>
      <article className="resume">
        <h3
          type="mission"
          className="mision">
            Missão
        </h3>
        <p>{mission}</p>
      </article>
      <article className="resume">
        <h3
          type="vision"
          className="vision">
            Visão
        </h3>
        <p>{vision}</p>
      </article>
    </section>
  );
}

export default AboutContent;
