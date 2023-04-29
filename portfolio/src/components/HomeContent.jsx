import React from 'react';
import './HomeContent.css';

function HomeContent() {
  return (
    <section className="home">
      <h1 className="greetings">Olá!</h1>
      <section>
        <p className="here-youll-find">Aqui você vai encontrar</p>
        <ul className="home-list">
          <li className="active">
            <a href="/projects">Projetos</a>
          </li>
          &
          <li className="active">
            <a href="/articles">Artigos</a>
          </li>
        </ul>
        <p className="here-youll-find">
          desenvolvidos por nós! :)
        </p>
      </section>
    </section>
  );
}

export default HomeContent;
