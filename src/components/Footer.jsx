import React from 'react';
// 1. Importe o vídeo como um módulo. O '../' sobe para a raiz de 'src', depois entra em 'videos'.
import localVideo from '../videos/manual-paymas.mp4'; 

const Footer = () => {
  // A variável 'localVideo' agora contém o caminho correto gerado pelo Vite.
  const videoSource = localVideo; 

  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" items-center">
          
          {/* Informações do Rodapé (mantidas) */}
          <div>
            <h4 className="text-2xl font-bold text-indigo-400 mb-4">Vídeo Tutorial:</h4>
          </div>

          {/* Player de Vídeo HTML5 (Corrigido para Importação Local) */}
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl manual-shadow">
            <video
              className="w-full h-full object-cover transform transition duration-500 hover:scale-[1.03]"
              controls 
              // Remova "autoplay" e "muted" se desejar que o usuário inicie o vídeo.
              // autoPlay 
              // muted 
            >
              {/* 2. Use a variável importada no src */}
              <source src={videoSource} type="video/mp4" /> 
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;