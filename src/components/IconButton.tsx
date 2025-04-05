import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  hoverColor?: string; // Cor de fundo no hover
  textColor?: string; // Cor do ícone
}

export const IconButton = ({
  icon,
  isActive,
  onClick,
  hoverColor = "#A4A4A4", // Valor padrão para hoverColor
  textColor = "currentColor", // Valor padrão para textColor
}: IconButtonProps) => {
  return (
    <div
      className={`text-4xl rounded-md transition-all duration-300 transform ${
        isActive ? "scale-110" : "hover:scale-110"
      }`}
      style={{
        color: textColor, // Cor do ícone
      }}
      onClick={onClick}
    >
      <div
        className="rounded-md transition-colors duration-300 cursor-pointer" // Adiciona padding e borda arredondada
        style={{
          backgroundColor: isActive ? hoverColor : "transparent", // Cor de fundo quando ativo
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            e.currentTarget.style.backgroundColor = hoverColor; // Cor de fundo no hover
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.currentTarget.style.backgroundColor = "transparent"; // Remove a cor de fundo ao sair do hover
          }
        }}
      >
        {icon}
      </div>
    </div>
  );
};
