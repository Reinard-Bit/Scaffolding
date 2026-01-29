import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EquipmentGallery from './components/EquipmentGallery';
import Features from './components/Features';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-apex-black min-h-screen text-gray-100 selection:bg-gray-700 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <EquipmentGallery />
        <Features />
        <Process />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;