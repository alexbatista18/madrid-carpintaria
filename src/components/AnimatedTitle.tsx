import { motion, AnimatePresence } from "framer-motion";

interface AnimatedTitleProps {
  title: string;
}

export const AnimatedTitle = ({ title }: AnimatedTitleProps) => {
  return (
    <div className="w-1/4 bg-[#D4D4D4] h-1/16 rounded-b-2xl items-center justify-center flex overflow-hidden z-50">
      <AnimatePresence mode="wait">
        <motion.h1
          key={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="font-semibold text-black "
        >
          {title}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};
