// ANTES (Caminho antigo)
// import PaymasLogoImage from '../assets/logo-paymas-sem-fundo.png'; 

// DEPOIS (Caminho correto baseado na sua estrutura)
import PaymasLogoImage from '../images/PaymasLogoImage.png'; 
import { Link } from 'react-router-dom';
// Se você não for mais usar o componente PaymasLogo.jsx (SVG), remova a importação dele.

export default function Navbar() {
  const navItems = [
    { name: 'Início', to: '/' },
    { name: 'Manual', to: '/manual' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md backdrop-filter backdrop-blur-sm bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo (Usando a imagem PNG importada) */}
          <Link to="/" className="flex items-center space-x-2 transition duration-300 ease-in-out hover:opacity-90">
            <img 
              src={PaymasLogoImage} // <--- A variável importada
              alt="Machine Paymas Logo" 
              className="h-10 object-contain transition duration-300 ease-in-out transform hover:scale-105" // Ajuste o h-8 se a logo for muito alta
            />
          </Link>

          {/* Links de Navegação */}
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-orange-300 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out relative group"
              >
                {item.name}
                {/* Linha de hover com animação */}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}