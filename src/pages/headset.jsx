import { useState } from "react"
import Headset_1 from "../assets/headset_1.webp"
import Headset_2 from "../assets/headset_2.webp"
import Headset_3 from "../assets/headset_3.webp"
import Headset_4 from "../assets/headset_4.webp"
import Headset_5 from "../assets/headset_5.webp"
import Headset_6 from "../assets/headset_6.webp"
import Headset_7 from "../assets/headset_7.webp"
import Header from "../Components/header"
import { IoIosArrowUp } from "react-icons/io";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Headset = () => {
  const [expanded_1, setExpanded_1] = useState(false);
  const [expanded_2, setExpanded_2] = useState(false);
  const [expanded_3, setExpanded_3] = useState(false);

  const location = useLocation();
  useEffect(() => {
    const hash = location.hash;

    if (hash) {
      // Activa el acordeón correspondiente
      if (hash === "#headset_2") setExpanded_1(true);
      if (hash === "#headset_4") setExpanded_2(true);
      if (hash === "#headset_6") setExpanded_3(true);

      // Espera a que renderice y hace scroll
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  }, [location]);



  return (
    <div className="flex flex-col items-center text-base md:text-lg text-[#004466]">
      
      <Header text1="Problemas" text2="Comunes" text3="Headset" color="603fa8" />

      <div className="flex flex-col w-full lg:px-14 gap-5 md:px-20">
        <div className="flex flex-col items-center justify-center p-6 sm:p-10">
          <div id="headset_0" className="w-full text-center md:text-left flex text-3xl lg:text-5xl sm:text-4xl">
            <h1 className="font-extrabold mb-10 leading-tight text-[#004466] ">
              No se <span className="text-white bg-[#004466] py-1 p-3 rounded-4xl">escucha</span>  headset
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8 w-full items-start max-w-6xl h-auto mb-4">
            {/* Accordion 1: Verifica la conexión física */}
            <Accordion
              expanded={expanded_1}
              onChange={() => setExpanded_1(!expanded_1)}
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="p-4 flex items-center justify-between"
              >
                <div id="headset_1" className="flex items-center gap-3">
                  <div
                    className={`w-8 h-auto xs:h-5 flex items-center justify-center rounded-full text-white transition-all duration-300 ${
                      expanded_1 ? 'bg-[#0487d9] rotate-180' : 'bg-[#0487d9]'
                    }`}
                  >
                    <IoIosArrowUp className="w-5 h-auto" />
                  </div>
                  <h2 className="text-xl font-semibold text-[#0487d9]">
                    Verifica la conexión física
                  </h2>
                </div>
              </AccordionSummary>
              <AccordionDetails className="p-4 border-t border-gray-200">
                <div id="headset_2">
                  <p className=" text-base leading-relaxed">
                    Asegúrate de que la headset esté bien conectada al puerto USB, prueba con otro puerto USB.
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>

            {/* Accordion 2: Verifica el micrófono */}
            <Accordion
              expanded={expanded_2}
              onChange={() => setExpanded_2(!expanded_2)}
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <AccordionSummary
                aria-controls="panel2a-content"
                id="panel2a-header"
                className="p-4 flex items-center justify-between"
              >
                <div id="headset_3" className="flex items-center gap-3">
                  <div
                    className={`w-8 h-auto xs:h-5 flex items-center justify-center rounded-full text-white transition-all duration-300 ${
                      expanded_2 ? 'bg-[#a46fe8] rotate-180' : 'bg-[#a46fe8]'
                    }`}
                  >
                    <IoIosArrowUp className="w-5 h-auto" />
                  </div>
                  <h2 className="text-xl font-semibold text-[#a46fe8]">
                    Verifica el micrófono
                  </h2>
                </div>
              </AccordionSummary>
              <AccordionDetails className="p-4 border-t border-gray-200">
                <div id="headset_4">
                  <p className=" text-base leading-relaxed">
                    Asegúrate de que el micrófono no esté silenciado en la headset.
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>

            {/* Accordion 3: Haz una prueba en el sistema */}
            <Accordion
              expanded={expanded_3}
              onChange={() => setExpanded_3(!expanded_3)}
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <AccordionSummary
                aria-controls="panel3a-content"
                id="panel3a-header"
                className="p-4 flex items-center justify-between"
              >
                <div id="headset_5" className="flex items-center gap-3">
                  <div
                    className={`w-8 h-auto xs:h-5 flex items-center justify-center rounded-full text-white transition-all duration-300 ${
                      expanded_3 ? 'bg-[#0096c8] rotate-180' : 'bg-[#0096c8]'
                    }`}
                  >
                    <IoIosArrowUp className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-[#0096c8]">
                  Haz una prueba al sistema
                  </h2>
                </div>
              </AccordionSummary>
              <AccordionDetails className="p-4 border-t border-gray-200">
                <div id="headset_">
                  <p className=" text-base leading-relaxed">
                  Ahora vamos a hacerle una prueba a la headset para eso, Entrar a panel de control, en Hardware y sonido, sonido (administrar dispositivos de audio).
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full flex justify-center mt-8">
            <img
              src={Headset_1}
              alt="Ilustración de un headset o proceso de prueba de audio"
              className="w-full max-w-4xl h-auto rounded-3xl bg-white shadow-xl border border-blue-100"
            />
          </div>
        </div>
        <div className="w-full ">
          <div className="container mx-auto lg:px-6 md:px-10">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Tarjeta 1: Reconocer Headset */}
              <div className="group relative flex flex-col items-center justify-between bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden">
                {/* Encabezado con número y título */}
                <div className="p-6 md:p-8 space-y-4">
                  <div className="relative z-10">
                    <h3 id="headset_7" className="text-2xl font-bold text-slate-800">
                      Reconocer Headset
                    </h3>
                    <p id="headset_8" className=" leading-relaxed mt-2">
                      Verifica si el sistema reconoce tu headset. Deberías ver un indicador de volumen activo. Si no es así, consulta el siguiente paso.
                    </p>
                  </div>
                </div>
                {/* Imagen */}
                <div className="px-8 pb-8">
                  <img src={Headset_2} alt="Reconocer headset" className="w-96 lg:w-full h-auto rounded-lg shadow-md" />
                </div>
              </div>

              {/* Tarjeta 2: Configuración de Grabación */}
              <div className="group relative flex flex-col items-center justify-between bg-neutral-100 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden">
                {/* Encabezado con número y título */}
                <div className="p-6 md:p-8 space-y-4">
                  <div className="relative z-10">
                    <h3 id="headset_9" className="text-2xl font-bold text-slate-800">
                      Configurar Grabación
                    </h3>
                    <p id="headset_10" className=" leading-relaxed mt-2">
                      Ve a la pestaña de grabación para acceder a las propiedades del micrófono y asegurar que todo funcione correctamente.
                    </p>
                  </div>
                </div>
                {/* Imagen */}
                <div className="px-8 pb-8">
                  <img src={Headset_3} alt="Configuración de grabación" className="w-96 lg:w-full h-auto rounded-lg shadow-md" />
                </div>
              </div>

              {/* Tarjeta 3: Activar Escucha */}
              <div className="group relative flex flex-col items-center justify-between bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden">
                {/* Encabezado con número y título */}
                <div className="p-6 md:p-8 space-y-4">
                  <div className="relative z-10">
                    <h3 id="headset_11" className="text-2xl font-bold text-slate-800">
                      Activar Escucha
                    </h3>
                    <p id="headset_12" className=" leading-relaxed mt-2">
                      Activa la opción "Escuchar este dispositivo" y aplica los cambios. Ahora deberías oír tu propia voz a través del headset.
                    </p>
                  </div>
                </div>
                {/* Imagen */}
                <div className="px-8 pb-8">
                  <img src={Headset_4} alt="Activar escucha" className="w-96 lg:w-full h-auto rounded-lg shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-10  pt-2 pb-10 mt-14 ">
        <h2 id="headset_13" className="text-center md:text-left text-3xl md:text-4xl py-10 font-semibold text-[#004466]">
          No reconoce el <span className="text-white bg-[#004466] py-1 p-3 rounded-4xl">headset</span> USB
        </h2>
          {/* Sección Paso 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-10 mb-16 p-8 bg-white rounded-3xl shadow-xl border border-blue-100">
            <div className="flex-1 flex flex-col gap-6 items-start">
              <div className="flex items-center gap-4 ">
                <h3 id="headset_14" className="text-2xl font-bold">Conexión Física</h3>
              </div>
              <p id="headset_15" className="text-base leading-relaxed">
                Asegúrate de que tu headset esté correctamente conectada al puerto USB Si el problema persiste, intenta probar con otro puerto USB disponible Es crucial también comprobar el estado físico del cable USB busca cualquier daño, doblez o rotura que pueda estar causando la falla.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center p-4">
              <img src={Headset_5} alt="Revisar conexión USB y cable del headset" className="w-full max-w-md rounded-2xl shadow-lg  object-cover"/>
            </div>
          </div>

          {/* Sección Paso 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10 p-8 bg-neutral-100 border border-neutral-300 shadow-xl rounded-4xl">
            <div className="flex-1 flex flex-col gap-6 items-start">
              <div className="flex items-center gap-4 ">
                <h3 id="headset_16" className="text-2xl font-bold ">Verificación del Sistema y Dispositivo</h3>
              </div>
              <ul className="list-none flex flex-col gap-5 text-base leading-relaxed">
                <li id="headset_17" className="flex items-start gap-3">
                  <span className=" font-bold text-xl mt-1">✓</span>
                  Verifica que el sistema reconozca el headset correctamente justo al conectarlo. Debería aparecer como un dispositivo de audio activo.
                </li>
                <li id="headset_18" className="flex items-start gap-3">
                  <span className=" font-bold text-xl mt-1">✓</span>
                  Reinicia tu computadora: A menudo, un simple reinicio puede solucionar problemas de detección de hardware y refrescar los controladores.
                </li>
                <li id="headset_19" className="flex items-start gap-3">
                  <span className=" font-bold text-xl mt-1">✓</span>
                  Prueba en otro dispositivo: Conecta el headset a un ordenador o dispositivo diferente para verificar si es el headset o tu computadora la que tiene el problema.
                </li>
              </ul>
            </div>
            <div className="flex flex-col flex-1 gap-6 justify-center items-center p-4">
              <img
                src={Headset_6}
                alt="Captura de pantalla de reconocimiento de dispositivo 1"
                className="w-10/12 rounded-2xl shadow-lg  object-cover"
              />
              <img
                src={Headset_7}
                alt="Captura de pantalla de reconocimiento de dispositivo 2"
                className="w-10/12 rounded-2xl shadow-lg  object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headset
