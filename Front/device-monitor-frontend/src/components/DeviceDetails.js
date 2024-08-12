import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/DeviceDetails.css';

/**
 * Componente para exibir os detalhes de um dispositivo específico.
 */
const DeviceDetails = () => {
  const { id } = useParams();
  const [device, setDevice] = useState(null);

  useEffect(() => {
    // Requisição GET para obter detalhes do dispositivo
    axios.get(`http://localhost:8080/devices/${id}`) 
      .then(response => setDevice(response.data))
      .catch(error => console.error('Erro ao buscar dispositivo:', error));
  }, [id]);

  return (
    <div className="device-details">
      {device ? (
        <>
          <h1>{device.name}</h1>
          <p>Status: {device.status}</p>
          <p>Último Ping: {new Date(device.lastPing).toLocaleString()}</p>
          <p>Localização: {device.location}</p>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default DeviceDetails;
