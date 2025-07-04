import { useRef } from 'react';
import Callie_call_center from './assets/callie_call_center.png'
import app_1 from './assets/App_1.png'
import app_2 from './assets/App_2.png'
import app_3 from './assets/App_3.png'
import app_4 from './assets/App_4.png'
import Header from './Components/header';
import Monitor_6 from "./assets/monitor_6.png"

function App() {
  return (
    <div className="flex flex-col items-center justify-center text-base md:text-lg text-[#004466]">
    <Header text1="Manual de Problemas" text2="Comunes" text3="Perifericos" />
        
        <article id='Objetivo del manual' className="grid md:grid-cols-3 px- items-center w-11/12 8 mb-10 gap-0 justify-center">
          <div className='bg-neutral-100 relative p-10 shadow-xl shadow-indigo-200 rounded-2xl'>
            <h2 className="text-3xl font-bold mb-5">Objetivo del manual</h2>
            <p className="leading-relaxed">
              Empoderar a los agentes del call center para identificar, diagnosticar y resolver rápidamente errores comunes
              sin necesidad de asistencia técnica presencial, mejorando así la eficiencia y la satisfacción del cliente.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img src={Callie_call_center} className="w-5/12 md:w-8/12" />
          </div>
          <div className='bg-neutral-100 relative p-10 shadow-xl shadow-indigo-200 rounded-2xl'>
            <h2 className="text-3xl font-bold mb-5">Introducción</h2>
            <p className="leading-relaxed">
              Este manual te guiará paso a paso en la solución de problemas comunes que presentan los periféricos de computadora más utilizados, como monitores, headset, teclados y ratones. Incluye información detallada sobre la identificación de problemas, posibles causas y soluciones para cada tipo de dispositivo.
            </p>
          </div>
        </article> 

        <h1 className='font-bold leading-normal md:text-left text-center mt-10 text-5xl text-[#0367a6]'>Objetivos <span className="text-white bg-[#0367a6] p-2 px-4 rounded-4xl">Generales</span></h1>
        <div className='grid grid-cols-3 mx-10 mt-7'>
          <div className="p-10 rounded-xl text-center flex flex-col items-center gap-4">
            <img src={app_1} className="w-32 h-auto text-[#2eb8e8]" />
            <h1 className='font-bold text-2xl'>Reducir el tiempo de resolución de incidencias</h1>
            <p>Al permitir que los agentes resuelvan problemas comunes sin esperar a un técnico, se minimiza el tiempo de inactividad y se agiliza la atención al cliente.</p>
          </div>
          <div className="p-10 rounded-xl text-center flex flex-col items-center gap-4">
            <img src={Monitor_6} className="w-32 h-auto text-[#a46fe8]" />
            <h1 className='font-bold text-2xl'>Disminuir la dependencia del soporte técnico</h1>
            <p>Al empoderar a los agentes para resolver problemas comunes, se libera al personal técnico para enfocarse en asuntos más complejos, optimizando su tiempo y recursos.</p>
          </div>
          <div className="p-10 rounded-xl text-center flex flex-col items-center gap-4">
            <img src={app_2} className="w-32 h-auto text-[#2eb8e8]" />
            <h1 className='font-bold text-2xl'>Mejorar la satisfacción del cliente</h1>
            <p>Una resolución rápida y eficiente de las incidencias genera clientes más satisfechos y reduce la frustración asociada a los tiempos de espera y las transferencias.</p>
          </div>
        </div>

        <div className='grid grid-cols-2 mx-10 mt-7 '>
          <div className="p-10 rounded-xl text-center flex flex-col items-center gap-4">
            <img src={app_3} className="w-32 h-auto text-[#047b9b]" />
            <h1 className='font-bold text-2xl'>Mejorar la primera llamada (app_3)</h1>
            <p>Al tener las herramientas y el conocimiento para resolver problemas de forma autónoma, los agentes aumentan las posibilidades de solucionar la incidencia en la primera llamada, evitando transferencias y re-contactos.</p>
          </div>
          <div className="p-10 rounded-xl text-center flex flex-col items-center gap-4">
            <img src={app_4} className="w-32 h-auto text-[#2eb8e8]" />
            <h1 className='font-bold text-2xl'>Fortalecer las app_4 del agente</h1>
            <p>El manual proporciona a los agentes una valiosa herramienta de aprendizaje y desarrollo profesional, permitiéndoles ampliar sus conocimientos y mejorar su capacidad para resolver problemas.</p>
          </div>
        </div>
    </div>
  )
}

export default App
