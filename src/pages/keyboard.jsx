import Header from "../Components/header";
import keyboard_1 from "../assets/keyboard_1.png";
import keyboard_2 from "../assets/keyboard_2.png";
import Monitor_6 from "../assets/monitor_6.png";
import { MdLanguage, MdComputer } from 'react-icons/md';
import { BsKeyboard } from "react-icons/bs";

const Keyboard = () => {
    return (
        <div className="text-[#004466] flex flex-col items-center pb-20 text-base lg:text-lg"> 
            <Header text1="Problemas" text2="Comunes" text3="Teclado" color="0367a5" />

            <div className="mx-auto px-3 md:px-0 lg:px-4 py-8"> 
                <div className='grid md:grid-cols-2 gap-10 lg:px-10'>
                    <div className="flex flex-col lg:flex-col items-center gap-10 mb-16 p-8 bg-white rounded-3xl shadow-xl border border-blue-100">
                        <div className="flex-1 flex flex-col gap-6 items-start">
                            <div className="flex items-center gap-4 text-[#0096c8]">
                                <MdLanguage className="bg-blue-100 p-2 rounded-full shadow-md w-14 h-auto" />
                                <h3 className="text-2xl lg:text-3xl font-bold">Cambiar el Idioma del Teclado</h3>
                            </div>
                            <p>{"Cambiar el idioma del teclado: Ve a Configuración > Hora e idioma > Región e idioma. Asegúrate de que el idioma del teclado esté configurado correctamente (p. ej., Español - España)."}</p>
                        </div>
                        <div className="flex-1 flex justify-center items-center ">
                            <img
                                src={keyboard_1}
                                alt="Configuración de idioma del teclado en Windows"
                                className="w-full max-w-lg rounded-2xl shadow-lg border border-gray-200 object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-col items-center gap-10 mb-16 p-8 bg-white rounded-3xl shadow-xl border border-blue-100">
                        <div className="flex flex-col gap-6 items-start">
                            <div className="flex items-center gap-4 text-[#0487d9]">
                                <MdComputer className="bg-blue-100 p-3 w-14 h-auto rounded-full shadow-md " />
                                <h3 className="text-2xl lg:text-3xl font-bold">Prueba de Funcionamiento</h3> 
                            </div>
                            <p><span className='lg:text-xl font-bold'>Probar en otro dispositivo:</span> Conecta el teclado a otro ordenador para descartar un problema del hardware del teclado.</p>
                            <p>Si no funciona llamar al técnico a cargo.</p>
                        </div>
                        <div className="flex-1 flex justify-center items-center ">
                            <img
                                src={Monitor_6}
                                alt="Configuración de idioma del teclado en Windows"
                                className="w-5/12 max-w-md "
                            />
                        </div>
                    </div>
                </div>
                <div className='lg:px-10'>
                    <div className="flex flex-col lg:flex-row items-center mb-16 p-8 bg-white rounded-3xl shadow-xl border border-blue-100">
                        <div className="flex flex-col gap-6 items-start lg:w-6/12">
                            <div className="flex items-center gap-4 text-[#0487d9]">
                               <BsKeyboard className="bg-blue-100 p-3 w-14 h-auto rounded-full shadow-md " />
                               <h3 className="text-2xl lg:text-3xl font-bold">Teclas no responden</h3> 
                            </div>
                            <div className='flex flex-col gap-5 px-5 md:px-10'>
                                <p><span className='md:text-xl font-bold'>Verificar conexiones:</span> Asegúrate de que el teclado esté correctamente conectado al puerto USB, Verifica que las luces del teclado estén encendidas.</p>
                                <p><span className='md:text-xl font-bold'>Probar en otro puerto:</span> Conecta el teclado a otro puerto USB.</p>
                                <p><span className='md:text-xl font-bold'>Reiniciar el ordenador:</span> A veces, un reinicio puede solucionar problemas temporales</p>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center items-center p-4">
                            <img
                                src={keyboard_2}
                                alt="Configuración de idioma del teclado en Windows"
                                className="w-12/12 rounded-2xl shadow-lg "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Keyboard;