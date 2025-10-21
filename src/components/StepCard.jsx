import React from 'react';

const StepCard = ({ number, title, description }) => {
  return (
    <div className="relative p-6 bg-orange-200 rounded-xl manual-shadow hover:shadow-indigo-500/40 transition duration-300 ease-in-out transform hover:-translate-y-1">
      {/* Número do Passo (Badge) */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4">
        <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-orange-600 text-white text-lg font-extrabold shadow-lg animate-pulse">
          {number}
        </span>
      </div>
      
      {/* Conteúdo */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-3 flex items-center">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default StepCard;