import React from 'react';
import StepCard from '../components/StepCard';

const steps = [
  {
    number: 1,
    title: 'Desembalando e Verificando',
    description: 'Abra a caixa com cuidado e certifique-se de que todos os itens estão presentes: máquina Paymas, cabo de energia, rolo de papel e manual de garantia.',
  },
  {
    number: 2,
    title: 'Conexão de Energia',
    description: 'Conecte o cabo de energia na máquina e em uma tomada. Pressione e segure o botão de liga/desliga para iniciar o equipamento.',
  },
  {
    number: 3,
    title: 'Configuração de Rede (Wi-Fi/Chip)',
    description: 'No menu inicial, selecione "Configurações de Rede". Escolha sua rede Wi-Fi e insira a senha, ou verifique se o chip de dados já está ativo.',
  },
  {
    number: 4,
    title: 'Primeira Transação de Teste',
    description: 'Realize uma transação de teste com um valor simbólico (Ex: R$ 0,01) para garantir que a comunicação com o servidor e a impressão do comprovante estão funcionando corretamente.',
  },
  {
    number: 5,
    title: 'Personalização Final',
    description: 'Acesse o portal do lojista para configurar taxas, dados da loja e definir seus métodos de pagamento preferenciais. Sua Paymas está pronta para uso!',
  },
];

const Manual = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3 animate-slideInLeft">
            Guia Completo de Instalação
          </h1>
          <p className="text-xl text-gray-600 animate-slideInRight">
            Siga estes 5 passos simples para começar a usar sua máquina Paymas.
          </p>
        </header>

        {/* Grade de Passos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <StepCard 
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manual;