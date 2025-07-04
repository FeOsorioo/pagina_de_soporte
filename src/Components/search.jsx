import { useState } from "react";
import monitor from "./monitor.json";
import { IoSearch, IoClose, IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css'
import { createPortal } from "react-dom";


function Search() {
  const navigate = useNavigate();
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [resultados, setResultados] = useState([]);

  const normalizarTexto = (texto) =>
    texto
      .normalize("NFD") // separa los acentos
      .replace(/[\u0300-\u036f]/g, "") // elimina acentos
      .toLowerCase();

  const handleChange = (e) => {
    const texto = e.target.value;
    setQuery(texto);

    const coincidencias = monitor.filter((item) =>
      normalizarTexto(item.text).includes(normalizarTexto(texto))
    );

    setResultados(coincidencias);
  };

  const handleClick = (route, id, match) => {
    console.log("Va a ir a " + route + " al componente: " + id + " con la palabra clave " + match)
    navigate(`${route}?match=${encodeURIComponent(match)}#${id}`);
    setOpenSearch(false);
    setQuery("");
  }

  return (
    <div className="mx-auto">
      <button
        onClick={() => setOpenSearch(true)} 
        className="flex bg-gray-50 hover:bg-gray-100 p-3 rounded-3xl border border-gray-300 w-full cursor-pointer mb-5">
        <IoSearch className="text-gray-500 w-5 h-auto mr-2"/>
        Buscar...
      </button>
      
      {openSearch && (
        <div className="fixed top-0 left-0 w-screen h-screen z-[100] bg-neutral-100/80 flex items-center justify-center px-6">
          <div className="w-8/12 max-h-11/12 bg-white p-5 rounded-xl shadow-xl">
            <button
              onClick={() => {
                setOpenSearch(false);
                setQuery("");
                setResultados([]);
              }}
              className="flex justify-end w-full -mb-3 text-sm text-gray-500 hover:text-gray-800"
            >
              X
            </button>

            <h2 className="text-xl font-bold mb-2">Buscar en la guía</h2>
            <input
              type="text"
              placeholder="Buscar..."
              value={query}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-gray-400 focus:outline-none px-3 py-2 rounded"
              autoFocus
            />
            <div className="mt-4">
              {query && resultados.length > 0 ? (
                <SimpleBar style={{ maxHeight: "300px" }} className="space-y-2 pr-2">
                  {resultados.map((item) => (
                    <button
                      key={item.id}
                      className="flex gap-3 cursor-pointer w-full text-left p-3 hover:bg-gray-100 rounded"
                      onClick={() => handleClick(item.route, item.id, query)}
                    >
                      <p className="text-sm leading-relaxed">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: item.text.replace(
                              new RegExp(`(${normalizarTexto(query)})`, "gi"),
                              (match) => `<span class="font-extrabold">${match}</span>`
                            ),
                          }}
                        />
                      </p>
                    </button>
                  ))}
                </SimpleBar>
              ) : query && resultados.length === 0 ? (
                <p className="text-red-600">
                  No se encontró ninguna coincidencia con: <strong>{query}</strong>
                </p>
              ) : null}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Search;
