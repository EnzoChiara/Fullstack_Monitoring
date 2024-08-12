import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Alerts.css'; 

/**
 * Componente para exibir a lista de alertas.
 */
const Alerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Requisição GET para obter alertas
    axios.get('http://localhost:8080/alerts')
      .then(response => {
        console.log('Dados recebidos:', response.data); 
        setAlerts(response.data);
      })
      .catch(error => console.error('Erro ao buscar alertas:', error));
  }, []);

  /**
   * Função para formatar a data recebida do backend.
   * 
   * @param {string} dateString - String de data a ser formatada.
   * @returns {string} Data formatada.
   */
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? 'Data inválida' : date.toLocaleString();
  };

  return (
    <div className="alerts">
      <h1>Alertas</h1>
      <ul>
        {alerts.map(alert => (
          <li key={alert.id} className="alert-item">
            <p><strong>Data:</strong> {formatDate(alert.createdAt)}</p>
            <p><strong>Mensagem:</strong> {alert.message}</p>
            <p><strong>Status:</strong> {alert.alertType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alerts;
