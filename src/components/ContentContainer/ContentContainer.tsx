import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SobreMi } from "./SobreMi";
import { MisTrabajos } from "./MisTrabajos";
import { Presupuesto } from "./Presupuesto";

interface ContentContainerProps {
  activeTitle: string;
}

export const ContentContainer = ({ activeTitle }: ContentContainerProps) => {
  let content: ReactNode;

  switch (activeTitle) {
    case "Sobre mi":
      content = <SobreMi />;
      break;
    case "Mis trabajos":
      content = <MisTrabajos />;
      break;
    case "Presupuesto":
      content = <Presupuesto />;
      break;
  }

  return (
    <div className="w-full h-full flex-col items-center justify-center  flex">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTitle} // Usamos activeTitle como chave para reiniciar a animação
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full flex items-center justify-center"
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
