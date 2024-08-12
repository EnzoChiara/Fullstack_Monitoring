import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/DeviceLogs.css';

/**
 * Componente para exibir logs de um dispositivo específico.
 */
const DeviceLogs = () => {
  const { deviceId } = useParams();
  const [logs, setLogs] = useState([]);
  const [deviceStatus, setDeviceStatus] = useState('');

  useEffect(() => {
    // Requisição GET para obter o status do dispositivo e seus logs
    axios.get(`http://localhost:8080/devices/${deviceId}`)
      .then(response => setDeviceStatus(response.data.status))
      .catch(error => console.error('Erro ao buscar detalhes do dispositivo:', error));

    axios.get(`http://localhost:8080/devices/${deviceId}/logs`)
      .then(response => setLogs(response.data))
      .catch(error => console.error('Erro ao buscar logs:', error));
  }, [deviceId]);

  return (
    <div className="logs-container">
      <h1>Logs do Dispositivo</h1>
      <p><strong>Status do Dispositivo:</strong> {deviceStatus}</p>
      <ul>
        {logs.map(log => (
          <li key={log.id} className="log-item">
            <p><strong>Data:</strong> {new Date(log.createdAt).toLocaleString()}</p>
            <p><strong>Mensagem:</strong> {log.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceLogs;
