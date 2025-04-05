"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

// Importe os estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconButton } from "../IconButton";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

export const MisTrabajos = () => {
  const images = [
    "/images/trabalho1.jpg",
    "/images/trabalho2.jpg",
    "/images/trabalho3.jpg",
    "/images/trabalho4.jpg",
  ];

  // Correção: Adicionado null como valor inicial
  const swiperRef = useRef<SwiperType | null>(null);
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="text-white text-center h-full w-full ">
      <div className="relative px-4 h-10/12 w-full flex items-center justify- ">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="my-custom-swiper w-full max-w-6xl mx-auto"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`relative h-64 md:h-80 rounded-lg overflow-hidden transition-all duration-300 ${
                    isActive ? "scale-110 z-10" : "scale-90 opacity-80"
                  }`}
                >
                  <div className="h-full w-full rounded-lg overflow-hidden"></div>
                  <Image
                    src={src}
                    alt={`Trabalho ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0} // Adicionado para melhor performance
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões de navegação personalizados */}
        <button
          ref={navigationPrevRef}
          className="absolute left-4 top-1/2 -translate-y-1/3 z-20  bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all hover:scale-110 hover:bg-[#333333] cursor-pointer"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Imagem anterior"
        >
          <IoIosArrowBack className="text-4xl" />
        </button>
        <button
          ref={navigationNextRef}
          className="absolute right-4 top-1/2 -translate-y-1/3 z-20  bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all hover:scale-110 hover:bg-[#333333] cursor-pointer"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Próxima imagem"
        >
          <IoIosArrowForward className="text-4xl" />
        </button>
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
