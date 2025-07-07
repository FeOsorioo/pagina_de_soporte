import Monitor_1 from "../assets/monitor_1.png"
import Monitor_2 from "../assets/monitor_2.png"
import Monitor_3 from "../assets/monitor_3.png"
import Monitor_4 from "../assets/monitor_4.png"
import Monitor_5 from "../assets/monitor_5.jpg"
import Monitor_6 from "../assets/monitor_6.png"
import Header from "../Components/header"

const Monitor = () => {
  return (
    <div className="text-[#004466] flex flex-col items-center text-base md:text-lg">
      
    <Header text1="Problemas" text2="Comunes" text3="con el Monitor" color="2eb8e8" />

    <h1 id="monitor_0" className="text-2xl md:text-4xl text-left font-medium">El monitor no enciende:</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-14 my-10">
      <div id="monitor_1" className="bg-neutral-200 flex flex-col p-6 items-center rounded-xl shadow-md">
        <img src={Monitor_1} className=" w-5/12 p-4" /> 
        <p>Asegúrate de los cables de alimentación y VGA estén conectados correctamente al monitor y CPU.</p>
      </div>
      <div id="monitor_2" className="bg-neutral-200 flex flex-col p-6 items-center rounded-xl shadow-md">
        <img src={Monitor_2} className=" w-5/12 p-4" />
        <p>Verifica que el cable de energía este correctamente conectado al tomacorriente.</p>
      </div>
      <div id="monitor_3" className="bg-neutral-200 flex flex-col p-6 items-center rounded-xl shadow-md">
        <img src={Monitor_3} className=" w-5/12 p-4" />
        <p>Asegúrese que le monito este encendido, normalmente el botón alumbra, de lo contrario presioné el botón y encienda el monitor.</p>
      </div>

      
      <div className="bg-neutral-200 flex flex-col p-6 items-center rounded-xl shadow-md">
        <img id="monitor_4" src={Monitor_4} className=" w-5/12 p-4" /> 
        <p>Si el monitor enciende, pero no da imagen verifique que este saliendo por la señala analógica este se puede cambiar en el botón antes de auto como se ve en la imagen.</p>
      </div>
      <div id="monitor_5" className="bg-neutral-200 flex flex-col p-6 items-center rounded-xl shadow-md">
        <img src={Monitor_5} className=" w-5/12 p-4 rounded-full" />
        <p>También puedes probar si esta compartiendo la otra pantalla con el comando de Windows + P, y seleccionar Ampliar</p>
      </div>
      <div id="monitor_6" className="bg-neutral-200 flex flex-col p-6 items-center rounded-xl shadow-md">
        <img src={Monitor_6} className=" w-5/12 p-4" />
        <p>Si no funciona ninguna de las acciones anteriores llamar al técnico encargado probablemente se tiene que cambiar algún periférico.</p>
      </div>
    </div>
    </div>
  );
};

export default Monitor;
