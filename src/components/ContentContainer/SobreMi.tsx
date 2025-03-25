import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { IconButton } from "../IconButton";

export const SobreMi = () => {
  return (
    // Div principal com 2 containers. 1 ocupa 3/4 da tela e o outro 1/4
    <div className="w-full h-full flex-col">
      <div className="w-full h-10/12 flex items-end">
        <div className="w-2/3 h-full flex items-end justify-center">
          {/* Container para apresentação */}
          <div className="w-3/4 h-5/6 bg-[#333333] rounded-xl">
            <span className=""> Teste</span>
          </div>
        </div>
        <div className="w-1/3 h-5/6 flex items-center justify-center ">
          <div className="w-4/7 h-6/7 rounded-full bg-amber-400"></div>
          {/* Para foto */}
        </div>
      </div>
      {/* Container para redes sociais */}
      <div className="h-2/12 w-full items-center justify-center flex gap-10">
        <IconButton
          icon={<AiOutlineInstagram />}
          textColor="white"
          hoverColor="#333333"
        />
        <IconButton
          icon={<AiOutlineWhatsApp />}
          textColor="white"
          hoverColor="#333333"
        />
      </div>
    </div>
  );
};
