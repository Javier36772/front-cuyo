import React, { useState, useEffect } from 'react';
import '../sources/VerHabitad.css';
import Navbar7 from '../moleculas/Navbar7';

function App() {
  const [temperature, setTemperature] = useState(null);
  const [soilMoisture, setSoilMoisture] = useState(null);
  const [waterLevel, setWaterLevel] = useState(0); // Inicializado como numérico

  useEffect(() => {
    const socket = new WebSocket('ws://44.223.144.168');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setTemperature(data.temperature);
      setSoilMoisture(data.soilMoisture);
      setWaterLevel(data.waterLevel); // Asumiendo que waterLevel es un número
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <Navbar7 />
      <div className="container">
        <h1 className='h1'>Habitat</h1>
        <div className="row">
          <div className="col">
            <div className="card">
              <h2>Temperatura ambiental</h2>
              <p>{temperature !== null ? `${temperature}°` : 'Cargando...'}</p>
              <button className="button">Activar ventilador</button>
              <p className="small">El ventilador se activará de forma automática a los 32°</p>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <h2>Nivel de agua</h2>
              <p>{waterLevel !== null ? `${waterLevel} %` : 'Cargando...'}</p>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <h2>Nivel de humedad</h2>
              <p>{soilMoisture !== null ? `${soilMoisture}%` : 'Cargando...'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
