import Header from "../Components/header.jsx"
import red_1 from '../assets/red_1.png'
import red_2 from '../assets/red_2.png'
import Monitor_6 from "../assets/monitor_6.png"


const Red = () => {
    return (
        <div className="text-[#004466] flex flex-col items-center text-base lg:text-xl px-10 md:px-0">
            <Header text1="Problemas" text2="Comunes" text3="de Red" color="0096c8" />

          <div className="flex flex-col md:flex-row gap-10 md:px-14 lg:px-10">
            <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md mb-8 mt-8 border border-gray-300">
                <h1 className="md:text-2xl lg:text-3xl font-bold mb-4 text-center">Verifica la conexión física</h1>
                <p className="leading-relaxed mb-6">Asegúrate de que todos los cables estén correctamente conectados. Tanto en el computador como en el punto de red, Revisa el cable de red (Ethernet) si estás utilizando una conexión cableada, o verifica que estés conectado a la red Wi-Fi adecuada.</p>
                <div className="flex justify-center mb-6">
                    <img src={red_1} alt="Conexión física de red" className="max-w-full h-auto rounded-md shadow-sm" />
                </div>
            </div>

            <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md mb-8 border border-gray-300">
                <h1 className="md:text-2xl lg:text-3xl font-bold mb-4 text-center">Verificar Conexiones de Red</h1>
                <p className="leading-relaxed mb-6">Verificar la Conexión en la ventana Conexiones de Red: Simbolo Windows+R: ncpa.cpl, para asi identificar si reconoce el cable de red.</p>
                <div className="flex justify-center mb-6">
                    <img src={red_2} alt="Ventana de conexiones de red" className="max-w-full h-auto rounded-md shadow-sm" />
                </div>
            </div>
          </div>

<div className="flex flex-col md:flex-row w-full md:max-w-3xl lg:max-w-4xl bg-white p-8 rounded-lg shadow-md mb-8 border border-gray-300 gap-6 md:gap-10">
<img src={Monitor_6} className="w-1/2 md:w-3/12 h-auto mx-auto md:mx-0" />

                <p className="leading-relaxed">Si tras seguir los procedimientos previamente mencionados no se logra obtener una solución, Se deberá notificar al Supervisor de Campaña correspondiente para que inicie el proceso de creación de una incidencia o ticket en el sistema de gestión de incidencias (GLPI). Esto permitirá que un técnico se desplace para realizar un diagnóstico y resolver el problema de manera oportuna y eficaz.</p>
            </div>
        </div>
    )
}

export default Red;