import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <section className="contact">
      <form className="contact-form">
        <h1>O que me conta?</h1>
        <label htmlFor="input-first-name">
          <input
            className="text-input"
            type="text"
            id="input-first-name"
            placeholder="Nome"
          />
        </label>
        <label htmlFor="input-last-name">
          <input
            type="text"
            className="text-input"
            placeholder="Sobrenome"
            id="input-last-name"
          />
        </label>
        <label htmlFor="input-email">
          <input
            className="text-input"
            type="email"
            placeholder="E-mail"
            id="input-email"
          />
        </label>
        <label htmlFor="input-tel">
          <input
            className="text-input"
            type="tel"
            placeholder="Celular"
            id="input-tel"
          />
        </label>
        <textarea
          className="text-input"
          placeholder="Sobre o que vamos conversar?"
          id="input-text"
          rows="1"
        />
        <textarea
          className="text-input"
          rows="6"
          placeholder="Escreva aqui em detalhes"
        />
        <button
          className="submit-btn"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
