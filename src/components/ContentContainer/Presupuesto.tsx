export const Presupuesto = () => {
  return (
    <div className="text-white h-full w-full relative">
      <div className="bg-[#333333] rounded-2xl flex absolute inset-0 m-auto p-8 w-[98%] h-[95%] -top-4 z-0 shadow-[5px_4px_2px_rgba(0,0,0,0.5)]">
        {/* Coluna Esquerda */}
        <div className="w-1/3 pr-4 flex flex-col gap-4">
          <span>Pon el link de tu tarima de interes</span>
          <input
            type="text"
            className="bg-[#4D4D4D] rounded-sm h-6 w-86 p-1 shadow-[3px_3px_4px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-black"
          />
          <span>Custo tarima selecionada</span>
          <div className="flex gap-2">
            <input
              type="text"
              className="bg-[#4D4D4D] rounded-sm h-6 w-16 p-1 shadow-[3px_3px_4px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-black"
            />{" "}
            <span>€ / m2</span>
          </div>
          <span>Para el Presupuesto final responda</span>
          <span>Quantos cômodos son?</span>
          <div className="flex gap-2">
            <input
              type="text"
              className="bg-[#4D4D4D] rounded-sm h-6 w-16 p-1 shadow-[3px_3px_4px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-black"
            />{" "}
          </div>
          <span>Quantos metros quadrados tem cada cômodo?</span>
          <span>Metragens cômodo 1</span>
          <div className="flex gap-2">
            <input
              type="text"
              className="bg-[#4D4D4D] rounded-sm h-6 w-16 p-1 shadow-[3px_3px_4px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-black"
            />{" "}
            <span>x</span>
            <input
              type="text"
              className="bg-[#4D4D4D] rounded-sm h-6 w-16 p-1 shadow-[3px_3px_4px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-black"
            />{" "}
          </div>
          <span>Metragens cômodo 2</span>
          <div className="flex gap-2">
            <input
              type="text"
              className="bg-[#4D4D4D] rounded-sm h-6 w-16 p-1 shadow-[3px_3px_4px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-black"
            />{" "}
            <span>x</span>
            <input
              type="text"
              className="bg-[#4D4D4D] rounded-sm h-6 w-16 p-1 shadow-[3px_3px_4px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-black"
            />{" "}
          </div>
        </div>

        {/* Coluna Direita (vazia - para você adicionar conteúdo depois) */}
        <div className="w-2/3 pl-10 border-l border-gray-600 flex flex-col items-center justify-center">
          {/* Espaço reservado para o conteúdo da direita */}
          <div className="h-full flex items-center justify-center bg-[#3a3a3a] rounded-lg w-full">
            <p className="text-gray-400">Área para conteúdo adicional</p>
          </div>
        </div>
      </div>
    </div>
  );
};
