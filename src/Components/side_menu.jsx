import { useState } from "react";
import { MdMonitor } from "react-icons/md";
import { FaRegImage } from "react-icons/fa6";
import { PiHeadsetFill } from "react-icons/pi";
import { BsFillKeyboardFill, BsMouseFill } from "react-icons/bs";
import { FaSignal } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Search from "./search.jsx";
import Logo from "../assets/General.png";

const MenuItem = ({ icon, label, onClickButton }) => {
  return (
    <div
      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
      onClick={onClickButton}
    >
      <span className="text-gray-500">{icon}</span>
      <span>{label}</span>
    </div>
  );
};

const Side_menu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Botón hamburguesa (solo en móvil) */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed top-4 left-4 z-[9999] bg-white p-2 rounded-full shadow-lg"
      >
        {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
      </button>

      {/* Overlay oscuro en móviles */}
      {isOpen && (
        <div
          onClick={closeMenu}
        />
      )}

      {/* Menú lateral */}
      <div
        className={`
          fixed top-0 left-0 z-50 w-64 h-screen bg-white shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:block
        `}
      >
        <SimpleBar className="h-full p-6 flex flex-col justify-between font-sans text-sm text-gray-600">
          <div>
            <img
              src={Logo}
              alt="Logo"
              className="w-40 mb-5 mx-auto cursor-pointer"
              onClick={() => {
                navigate("/");
                closeMenu();
              }}
            />

            {/* Buscador */}
            <Search />

            {/* Navegación */}
            <nav className="flex flex-col gap-1">
              <MenuItem
                icon={<MdMonitor size={18} />}
                label="Monitor"
                onClickButton={() => {
                  navigate("/monitor");
                  closeMenu();
                }}
              />
              <div className="my-2 border-t border-gray-200" />

              <MenuItem
                icon={<FaRegImage size={18} />}
                label="Imagen"
                onClickButton={() => {
                  navigate("/imagen");
                  closeMenu();
                }}
              />
              <div className="my-2 border-t border-gray-200" />

              <MenuItem
                icon={<PiHeadsetFill size={18} />}
                label="Headset"
                onClickButton={() => {
                  navigate("/headset");
                  closeMenu();
                }}
              />
              <div className="my-2 border-t border-gray-200" />

              <MenuItem
                icon={<BsFillKeyboardFill size={18} />}
                label="Teclado"
                onClickButton={() => {
                  navigate("/teclado");
                  closeMenu();
                }}
              />
              <div className="my-2 border-t border-gray-200" />

              <MenuItem
                icon={<BsMouseFill size={18} />}
                label="Mouse"
                onClickButton={() => {
                  navigate("/mouse");
                  closeMenu();
                }}
              />
              <div className="my-2 border-t border-gray-200" />

              <MenuItem
                icon={<FaSignal size={18} />}
                label="Red"
                onClickButton={() => {
                  navigate("/red");
                  closeMenu();
                }}
              />
            </nav>
          </div>

          {/* Footer */}
          <div className="text-xs text-gray-400 text-center">
            © 2025 Contact Center Grupo
          </div>
        </SimpleBar>
      </div>
    </>
  );
};

export default Side_menu;
