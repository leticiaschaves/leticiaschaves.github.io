import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import HomeContent from '../components/main/HomeContent';
import AboutContent from '../components/main/AboutContent';
import ContactForm from '../components/main/ContactForm';

function Home() {
  return (
    <div>
      <Header />
      <HomeContent />
      <AboutContent />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;
