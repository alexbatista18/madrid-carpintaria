"use client";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { IconButton } from "@/components/IconButton";
import { ContentContainer } from "@/components/ContentContainer/ContentContainer";
import { useState } from "react";
import { AiOutlineEuro, AiOutlineRead, AiOutlineUser } from "react-icons/ai";

export default function Home() {
  const [activeTitle, setActiveTitle] = useState("Sobre mi");

  return (
    <div className="h-screen w-screen bg-[#4D4D4D] items-center flex flex-col">
      <div className="w-full h-1/11 bg-[#D4D4D4] items-center justify-center flex">
        <div className="flex items-center justify-center space-x-10 ">
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
      <AnimatedTitle title={activeTitle} />
      {/* Container com conteúdo dinâmico */}
      <ContentContainer activeTitle={activeTitle} />
    </div>
  );
}
