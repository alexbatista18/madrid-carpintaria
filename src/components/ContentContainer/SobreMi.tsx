import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { IconButton } from "../IconButton";
import Image from "next/image";

export const SobreMi = () => {
  return (
    // Div principal com 2 containers. 1 ocupa 3/4 da tela e o outro 1/4
    <div className="w-full h-full flex-col">
      <div className="w-full h-10/12 flex items-end">
        <div className="w-2/3 h-full flex items-end justify-center">
          {/* Container para apresentação */}
          <div className="w-3/4 h-5/6 bg-[#333333] rounded-xl p-5 flex items-center justify-center">
            <span className="text-white text-justify leading-relaxed">
              Soy Jhoni Batista, tengo 26 años y hace tres años me mudé a España
              en busca de nuevas oportunidades. Desde entonces, me especialicé
              en el sector de reformas, enfocándome en la instalación de
              tarimas.
              <br />
              <br />
              Hoy en día, trabajo exclusivamente en Madrid, ofreciendo un
              servicio profesional y de calidad para transformar espacios con
              acabados impecables. Mi compromiso es garantizar un resultado
              duradero y estéticamente perfecto, adaptándome a las necesidades y
              gustos de cada cliente.
              <br />
              <br />
              Si buscas un instalador de tarimas de confianza, estaré encantado
              de ayudarte a darle un nuevo estilo a tu hogar o negocio.
            </span>
          </div>
        </div>
        <div className="w-1/3 h-5/6 flex items-center justify-center">
          {/* Container da imagem com posição relativa e tamanho definido */}
          <div className="relative w-70 h-86 rounded-full overflow-hidden bg-amber-400">
            <Image
              src="/images/perfil.png"
              alt="Foto de perfil"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      {/* Container para redes sociais */}
      <div className="h-2/12 w-full items-center justify-center flex gap-10">
        <IconButton
          icon={<AiOutlineInstagram />}
          textColor="white"
          hoverColor="#333333"
          onClick={() =>
            window.open(
              "https://www.instagram.com/madrid.carpinteria/",
              "_blank"
            )
          }
        />
        <IconButton
          icon={<AiOutlineWhatsApp />}
          textColor="white"
          hoverColor="#333333"
          onClick={() => window.open("https://wa.me/34662302744", "_blank")}
        />
      </div>
    </div>
  );
};
