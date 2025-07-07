import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Imagen_1 from "../assets/imagen_1.webp";
import Imagen_2 from "../assets/imagen_2.webp";
import Imagen_3 from "../assets/imagen_3.webp";
import Imagen_4 from "../assets/imagen_4.webp";
import Imagen_5 from "../assets/imagen_5.png";
import Header from "../Components/header";

import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Image = () => {
  const location = useLocation();
  const swiperRef = useRef(null);
  const [mostrarNavegacion, setMostrarNavegacion] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMostrarNavegacion(false); // ocultar flechas en móviles
    }
  }, []);
  const [palabraClave, setPalabraClave] = useState("");

  const normalizar = (texto) =>
  texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    const params = new URLSearchParams(location.search);
    const match = params.get("match");
    if (match) setPalabraClave(match);

    if (!hash) return;

    setTimeout(() => {
      const allSlides = document.querySelectorAll(".swiper-slide");
      let targetIndex = -1;

      allSlides.forEach((slide, index) => {
        if (slide.querySelector(`#${hash}`)) {
          targetIndex = index;
        }
      });

      if (targetIndex !== -1 && swiperRef.current) {
        swiperRef.current.slideTo(targetIndex);
      }

      // ✅ QUITA EL scrollIntoView para evitar que desplace mal
    }, 500); // Puedes aumentar este tiempo si notas que las imágenes tardan
  }, [location]);



  return (
    <div className="text-[#004466] flex flex-col items-center pb-12 text-lg">
      <Header text1="Problemas de" text2="Imagen" color="066984" />

      <div className="w-full px-4 py-10 relative">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={40}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={mostrarNavegacion}
              modules={[Pagination, Navigation]}
              className="max-w-3xl"
            >
                {/* Slide 1 */}
                <SwiperSlide className="w-full flex items-center justify-center pb-10">
                  <div className="flex flex-col items-center text-left">
                      <h2 id="image_0" className="text-center text-2xl lg:text-4xl font-bold mt-2 mb-4 text-[#004466]">
                        La imagen es <span className="text-white px-4 py-1 rounded-full bg-[#004466]">borrosa</span> o poco nítida
                      </h2>
                    <div className="bg-neutral-100 p-6 md:p-8 shadow-xl rounded-xl flex flex-col items-center text-center">
                      <p id="image_1" className="mb-4 leading-relaxed">
                            Ajusta la resolución de la pantalla <br />en la computadora para mejorar la nitidez de la imagen.
                      </p>
                      <img src={Imagen_1} alt="Configuración de pantalla" className="w-full h-auto max-w-md rounded-lg shadow-md mb-4" />
                      <img src={Imagen_2} alt="Resolución de pantalla" className="w-full h-auto max-w-md rounded-lg shadow-md"a />
                    </div>
                  </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide className="w-full flex items-center justify-center pb-10">
                  <div className="flex flex-col items-center text-center">
                      <h2 id="image_2" className="text-2xl md:text-4xl font-bold mt-2 mb-3 text-[#004466]">
                        La imagen está <span className="text-white px-4 py-1 rounded-full bg-[#004466]">distorsionada</span><br /> o de colores diferentes
                      </h2>
                    <article className="bg-neutral-100 p-6 md:p-8 shadow-xl rounded-xl flex flex-col items-center text-center">
                      <ul className="list-disc pl-6 text-base md:text-lg mb-4 leading-relaxed text-left w-full max-w-md">
                          <li id="image_3" className="mb-1" >
                            Llama al técnico para probar con un cable de video diferente.
                          </li>
                          <li id="image_4" >
                            Verifica la configuración de escalado de imagen en la computadora.
                        </li>
                      </ul>
                      <img src={Imagen_3} alt="Distorsión de imagen" className="w-full h-auto max-w-md rounded-lg shadow-md" />
                    </article>
                  </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide className="w-full flex items-center justify-center pb-10">
                  <div className="flex flex-col items-center text-center">
                      <h2 id="image_5" className="text-2xl md:text-4xl font-bold my-4 text-[#004466]">
                        Aparecen <span className="text-white px-4 py-1 rounded-full bg-[#004466]">líneas o rayas</span> en la pantalla
                      </h2>
                    <article className="bg-neutral-100 p-6 md:p-8 shadow-xl rounded-xl flex flex-col items-center text-center">
                      <ul className="list-disc pl-6 text-base md:text-lg mb-4 leading-relaxed text-left w-full max-w-md">
                        <li id="image_6" className="mb-1">
                          Verifica si hay daños en el monitor o en el cable de video.
                        </li>
                        <li>
                          Si persiste el problema, llama al técnico encargado.
                        </li>
                      </ul>
                      <img id="image_7" src={Imagen_4} alt="Líneas en pantalla" className="w-full h-auto max-w-md rounded-lg shadow-md" />
                    </article>
                  </div>
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide className="w-full flex items-center justify-center pb-10">
                  <div className="flex flex-col items-center justify-center text-center">
                      <h2 id="image_8" className="text-2xl md:text-4xl font-bold mt-3 mb-4 text-[#004466]">
                        Los colores son <span className="text-white px-4 py-1 rounded-full bg-[#004466]">incorrectos</span> o <br />están descoloridos
                      </h2>
                    <article className="bg-neutral-100 p-6 md:p-8 shadow-xl rounded-xl flex flex-col items-center text-center">
                      <p id="image_9" className="leading-relaxed">
                        Verifica la configuración de temperatura de <br />color del monitor en el menú del dispositivo.
                      </p>
                      <img src={Imagen_5} className="mt-5 w-6/12 h-auto" />
                    </article>
                  </div>
                </SwiperSlide>
              </Swiper>
      </div>
    </div>
  );
};

export default Image;
