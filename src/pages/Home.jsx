import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16 ">
      {/* Hero Section */}
      <header className="py-20 bg-gradient-to-r from-orange-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInDown">
            Manual de Instalação Machine Pay
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light animate-fadeInUp">
            Seu guia simples, rápido e visual para configurar sua máquina.
          </p>
          
          <Link
            to="/manual"
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full shadow-lg text-indigo-600 bg-white hover:bg-indigo-50 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 animate-bounce-slow"
          >
            Começar Agora
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Home;