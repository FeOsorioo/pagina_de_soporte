import React from 'react';
import Header from "../Components/header.jsx"
import mouse_1 from "../assets/mouse_1.jpg"
import mouse_2 from "../assets/mouse_2.png"
import mouse_3 from "../assets/mouse_3.png"
import { MdMouse, MdUsb, MdCheckCircle, MdLink, MdBuild } from 'react-icons/md';

const Mouse = () => {
  return (
    <div className="text-[#004466] flex flex-col items-center pb-20 text-y">
      <Header text1="Problemas" text2="Comunes" text3="Mouse" color="878fff" />

      <div className="container mx-auto px-20 py-10">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          Revisión general del funcionamiento del ratón si presenta alguna anomalía se va a realizar lo siguiente.
        </h1>

        {/* Paso 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16 p-8 bg-white rounded-3xl shadow-base border border-purple-100">
          <div className="flex-1 flex flex-col gap-6 items-start">
              <h3 className="text-2xl font-bold">1. Verificación de conexión y cable</h3>
              <p>Lo primero que se va a revisar es que el cable del ratón esté conectado correctamente en la torre.</p>
              <p>Luego se revisa que el cable que este en buenas condiciones.</p>
          </div>
          <div className="flex-1 flex justify-center items-center p-4">
            <img src={mouse_2} className='w-4/12' />
          </div>
        </div>

        {/* Paso 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 mb-16 p-8 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-3xl shadow-base border border-purple-200">
          <div className="flex-1 flex flex-col gap-6 items-start">
            <h3 className="text-2xl font-bold">2. Prueba de funcionamiento online</h3>
            <p >
              Luego de haber revisado el cable, se ingresará al siguiente link 
              <a
                href="https://www.onlinemictest.com/es/prueba-de-mouse/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold inline-block mt-2"
              >
                https://www.onlinemictest.com/es/prueba-de-mouse/
              </a>
              para verificar el funcionamiento del mouse.

            </p>
            <p >
             Luego de haber ingresado al enlace se colocará el puntero sobre la ilustración del ratón para comenzar la prueba.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center p-4">
            <img
              src={mouse_1}
              alt="Captura de la prueba de mouse online"
              className="w-full max-w-md rounded-2xl shadow-lg border border-gray-200 object-cover"
            />
          </div>
        </div>

        {/* Paso 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-10 p-8 bg-white rounded-3xl shadow-base border border-purple-100">
          <div className="flex-1 flex flex-col gap-6 items-start">
              <h3 className="text-2xl font-bold">3. Verificación de botones y rueda</h3>
            <p >Cuando ya se esté sobre la ilustración se empezará probando los botones del ratón dándole clic a ambos y verificando que se esté iluminando en la ilustración.</p>
            <p >Luego de verificar los botones vamos a verificar la rueda del ratón girándola hacia arriba y abajo verificando que las flechitas en la ilustración se estén iluminando.</p>
            <p className="text-lg font-semibold text-red-700 leading-relaxed">Si al revisar todos estos parámetros se verifica que el ratón no funciona, avisar al técnico encargado para una revisión más exhaustiva o si se requiere un cambio de mouse.</p>
          </div>
          <div className="flex-1 flex justify-center items-center p-4">
            <img src={mouse_3} className='w-7/12 rounded-full' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mouse;
