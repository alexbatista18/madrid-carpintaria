"use client";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { ContentContainer } from "@/components/ContentContainer/ContentContainer";
import { Menu } from "@/components/Menu";
import { useState } from "react";

export default function Home() {
  const [activeTitle, setActiveTitle] = useState("Sobre mi");

  return (
    <div className="h-screen w-screen bg-[#4D4D4D] items-center flex flex-col">
      <Menu activeTitle={activeTitle} setActiveTitle={setActiveTitle} />
      <AnimatedTitle title={activeTitle} />
      <ContentContainer activeTitle={activeTitle} />
    </div>
  );
}
