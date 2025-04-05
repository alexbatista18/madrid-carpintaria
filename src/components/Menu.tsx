"use client";
import { IconButton } from "./IconButton";
import { AiOutlineEuro, AiOutlineRead, AiOutlineUser } from "react-icons/ai";

interface MenuProps {
  activeTitle: string;
  setActiveTitle: (title: string) => void;
}

export const Menu = ({ activeTitle, setActiveTitle }: MenuProps) => {
  return (
    <div className="w-full h-1/11 bg-[#D4D4D4] items-center justify-center flex">
      <div className="flex items-center justify-center space-x-10">
        <IconButton
          icon={<AiOutlineUser />}
          isActive={activeTitle === "Sobre mi"}
          onClick={() => setActiveTitle("Sobre mi")}
        />
        <IconButton
          icon={<AiOutlineRead />}
          isActive={activeTitle === "Mis trabajos"}
          onClick={() => setActiveTitle("Mis trabajos")}
        />
        <IconButton
          icon={<AiOutlineEuro />}
          isActive={activeTitle === "Presupuesto"}
          onClick={() => setActiveTitle("Presupuesto")}
        />
      </div>
    </div>
  );
};
