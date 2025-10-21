// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    // Sem classes flex ou min-h-screen para que o Footer siga o conteúdo
    <div> 
      <Navbar />
      <main> 
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;