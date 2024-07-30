import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Navbar4 from '../moleculas/Navbar4';

function Tabla() {
  const [tablaSeleccionada, setTablaSeleccionada] = useState(0);
  const [tablas, setTablas] = useState([]);
  const [nombresTablas, setNombresTablas] = useState([]);
  
  // Updated URLs including the new animal endpoint
  const tablasURLs = [
    
    "http://54.172.12.139/animal" // New endpoint
  ];

  const cambiarTabla = (indice) => {
    setTablaSeleccionada(indice);
  };

  const obtenerEncabezados = () => {
    if (tablas.length > 0 && tablas[tablaSeleccionada]) {
      const primeraFila = tablas[tablaSeleccionada][0];
      return primeraFila ? Object.keys(primeraFila) : [];
    }
    return [];
  };

  useEffect(() => {
    // Realizar todas las solicitudes Axios al mismo tiempo
    const solicitudesAxios = tablasURLs.map(url => Axios.get(url));

    Promise.all(solicitudesAxios)
      .then(responses => {
        // Mapear las respuestas y actualizar el estado
        const nuevasTablas = responses.map(response => response.data);
        setTablas(nuevasTablas);

        // Obtener los nombres de las tablas desde las respuestas
        const nuevosNombres = responses.map(response => {
          // Extraer el nombre de la tabla del último segmento de la URL
          const segments = response.config.url.split('/');
          return segments[segments.length - 1];
        });
        setNombresTablas(nuevosNombres);
      })
      .catch(error => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  return (
    <>
      <Navbar4 />
      <div
        className="h-screen flex flex-col items-center justify-center bg-cover"
        style={{
          backgroundImage: "url('../src/assets/fondo_patas.png')",
        }}
      >
        <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-2/3 xl:w-1/2 mb-4">
          <h2 className="text-3xl font-semibold mb-6 text-center text-black">
            Tabla de Datos
          </h2>
          <label htmlFor="tablaSelector" className="sr-only">
            Selecciona una tabla:
          </label>
          <select
            id="tablaSelector"
            className="block w-full p-2 border rounded-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-300 mb-4"
            value={tablaSeleccionada}
            onChange={(e) => cambiarTabla(Number(e.target.value))}
          >
            {nombresTablas.map((nombre, index) => (
              <option key={index} value={index}>
                {nombre}
              </option>
            ))}
          </select>
          <table className="min-w-full bg-white border border-gray-300 rounded shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <thead className="bg-slate-900 text-white">
              <tr>
                {obtenerEncabezados().map((encabezado, index) => (
                  <th key={index} className="py-3 px-4 text-left border border-gray-300">
                    {encabezado}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tablas.length > 0 &&
                tablas[tablaSeleccionada].map((registro, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-100 transition-bg' : 'bg-white transition-bg'}
                  >
                    {obtenerEncabezados().map((encabezado, index) => (
                      <td key={index} className="py-3 px-4 border border-gray-300 transition-bg">
                        {registro[encabezado]}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Tabla;
