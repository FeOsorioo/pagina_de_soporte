import { MdMonitor } from "react-icons/md"
import { FaRegImage } from "react-icons/fa6";
import { FaNetworkWired } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { PiHeadsetFill } from "react-icons/pi";
import { BsFillKeyboardFill } from "react-icons/bs";
import { BsMouseFill } from "react-icons/bs";
import { FaSignal } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import { useNavigate } from "react-router-dom";
import Logo from "../assets/General.png";

const MenuItem = ({
  icon,
  label,
  active = false,
  onClick,
  onClickButton,
  hasSubmenu = false,
  isOpen = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition ${
        active ? "bg-violet-100 text-violet-600 font-medium" : ""
      }`}
    >
      <span className="text-gray-500">{icon}</span>
      
      {/* Solo este botón navega */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Evita que se dispare el onClick del contenedor
          onClickButton();     // Navega
        }}
        className="cursor-pointer"
      >
        <span>{label}</span>
      </button>

      {hasSubmenu && (
        <IoIosArrowDown
          className={`ml-auto transition-transform duration-300 cursor-pointer ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      )}
    </div>
  );
};


const SubMenuItem = ({ label, onClick, active = false }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-3 px-3 py-2 rounded-br-lg rounded-tr-lg 
          hover:border-l-2 hover:border-gray-400 border-l-2 border-white transition ml-5"
    >
      <span className="cursor-pointer">{label}</span>
    </div>
  );
};

const Side_menu = () => {
  const navigate = useNavigate();

  const [openMonitor, setOpenMonitor] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const [openHeadset, setOpenHeadset] = useState(false);
  const [openKeyboard, setOpenKeyboard] = useState(false);
  const [openMouse, setOpenMouse] = useState(false);
  const [openRed, setOpenRed] = useState(false);

  return (
    <div className="fixed z-50 w-64 h-screen bg-white shadow-2xl flex flex-col justify-between font-sans text-sm text-gray-600">
      <SimpleBar className="h-full p-6 flex flex-col justify-between">
      <div>
        <img src={Logo} alt="Logo" className="w-40 mb-5 mx-auto cursor-pointer " onClick={() => navigate("/")}  />
    <div
      className="flex items-center gap-2 mb-5 px-3 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 border border-gray-200 transition"
    >
      <IoIosSearch className="text-gray-500 text-lg" />
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
      />
    </div>

        {/* Sección Monitor */}
        <nav className="flex flex-col gap-1 ">
          <MenuItem
            icon={<MdMonitor size={18} />}
            label="Monitor"
            onClickButton={() => navigate("/monitor")}
            onClick={() => setOpenMonitor(!openMonitor) }
            hasSubmenu
            isOpen={openMonitor}
          />
          {openMonitor && (
            <>
              <SubMenuItem label="El monitor no enciende" />
              <SubMenuItem label="El monitor parpadea" />
              <SubMenuItem label="La luz indicadora del monitor está encendida, pero no hay imagen" />
            </>
          )}
        </nav>

        {/* Separador */}
        <div className="my-2 border-t border-gray-200" />
          <nav className="flex flex-col gap-1 ">
            <MenuItem
              icon={<FaRegImage size={18} />}
              label="Imagen"
              onClickButton={() => navigate("/imagen")}
              onClick={() => setOpenImage(!openImage)}
              hasSubmenu
              isOpen={openImage}
            />
            {openImage && (
              <>
                <SubMenuItem label="Imagen borrosa" />
                <SubMenuItem label="Imagen distorsionada" />
                <SubMenuItem label="La imagen parpadea" />
                <SubMenuItem label="Líneas o rayas en la pantalla" />
              </>
            )}
          </nav>
        <div className="my-2 border-t border-gray-200" />
          <nav className="flex flex-col gap-1 ">
            <MenuItem
              icon={<PiHeadsetFill size={18} />}
              label="Headset,"
              onClickButton={() => navigate("/headset")}
              onClick={() => setOpenHeadset(!openHeadset)}
              hasSubmenu
              isOpen={openHeadset}
            />
            {openHeadset && (
              <>
                <SubMenuItem label="No se escucha headset" />
                <SubMenuItem label="No me escuchan (Microfono)" />
                <SubMenuItem label="No reconoce PC headset USB" />
              </>
            )}
          </nav>
        <div className="my-2 border-t border-gray-200" />
          <nav className="flex flex-col gap-1 ">
            <MenuItem
              icon={<BsFillKeyboardFill  size={18} />}
              label="Teclado"
              onClickButton={() => navigate("/teclado")}
              onClick={() => setOpenKeyboard(!openKeyboard)}
              hasSubmenu
              isOpen={openKeyboard}
            />
            {openKeyboard && (
              <>
                <SubMenuItem label="No se escucha headset" />
                <SubMenuItem label="No me escuchan (Microfono)" />
                <SubMenuItem label="No reconoce PC headset USB" />
              </>
            )}
          </nav>
        <div className="my-2 border-t border-gray-200" />
          <nav className="flex flex-col gap-1 ">
            <MenuItem
              icon={<BsMouseFill  size={18} />}
              label="Mouse"
              onClick={() => setOpenMouse(!openMouse)}
              hasSubmenu
              isOpen={openMouse}
            />
            {openMouse && (
              <>
                <SubMenuItem label="Revision general de mouse" />
              </>
            )}
          </nav>
        <div className="my-2 border-t border-gray-200" />
          <nav className="flex flex-col gap-1">
            <MenuItem
              icon={<FaSignal  size={18} />}
              label="Red"
              onClick={() => setOpenRed(!openRed)}
              hasSubmenu
              isOpen={openRed}
            />
            {openRed && (
              <>
                <SubMenuItem label="Verifica la conexion física" />
                <SubMenuItem label="Verificar conexiones de red" />
              </>
            )}
          </nav>
     </div>

      {/* Footer */}
      <div className="fixed text-xs text-gray-400 text-center bottom-6 left-10">
        © 2025 Contact Center Grupo
      </div>
      </SimpleBar>
    </div>
  );
};

export default Side_menu;
