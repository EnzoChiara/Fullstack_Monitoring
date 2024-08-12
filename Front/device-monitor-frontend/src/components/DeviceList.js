import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/DeviceList.css';

/**
 * Componente para exibir a lista de dispositivos e permitir edição e exclusão.
 */
const DeviceList = () => {
  const [devices, setDevices] = useState([]);
  const [editingDeviceId, setEditingDeviceId] = useState(null);
  const [editedDevice, setEditedDevice] = useState({ name: '', status: '', location: '' });

  useEffect(() => {
    // Requisição GET para obter a lista de dispositivos
    axios.get('http://localhost:8080/devices')
      .then(response => setDevices(response.data))
      .catch(error => console.error('Erro ao buscar dispositivos:', error));
  }, []);

  /**
   * Função chamada para iniciar o modo de edição de um dispositivo.
   * 
   * @param {Object} device - Dispositivo a ser editado.
   */
  const handleEdit = (device) => {
    setEditingDeviceId(device.id);
    setEditedDevice({ name: device.name, status: device.status, location: device.location });
  };

  /**
   * Função chamada para cancelar o modo de edição.
   */
  const handleCancelEdit = () => {
    setEditingDeviceId(null);
    setEditedDevice({ name: '', status: '', location: '' });
  };

  /**
   * Função chamada para salvar as alterações feitas no dispositivo.
   * 
   * @param {number} deviceId - ID do dispositivo a ser atualizado.
   */
  const handleSaveEdit = (deviceId) => {
    axios.put(`http://localhost:8080/devices/${deviceId}`, editedDevice)
      .then(() => {
        setDevices(devices.map(device => 
          device.id === deviceId ? { ...device, ...editedDevice } : device
        ));
        setEditingDeviceId(null);
      })
      .catch(error => console.error('Erro ao salvar alterações:', error));
  };

  /**
   * Função chamada para excluir um dispositivo.
   * 
   * @param {number} deviceId - ID do dispositivo a ser excluído.
   */
   const handleDelete = (deviceId) => {
    axios.delete(`http://localhost:8080/devices/${deviceId}`)
      .then(() => {
        setDevices(devices.filter(device => device.id !== deviceId));
      })
      .catch(error => {
        console.error('Erro ao excluir dispositivo:', error);
      });
  };
  

  /**
   * Função chamada para atualizar os dados do dispositivo editado.
   * 
   * @param {Object} e - Evento de mudança no formulário.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDevice({ ...editedDevice, [name]: value });
  };

  return (
    <div className="device-list">
      <h1>Lista de Dispositivos</h1>
      <ul>
        {devices.map(device => (
          <li key={device.id} className="device-item">
            {editingDeviceId === device.id ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={editedDevice.name}
                  onChange={handleChange}
                  placeholder="Nome"
                />
                <input
                  type="text"
                  name="status"
                  value={editedDevice.status}
                  onChange={handleChange}
                  placeholder="Status"
                />
                <input
                  type="text"
                  name="location"
                  value={editedDevice.location}
                  onChange={handleChange}
                  placeholder="Localização"
                />
                <div className="button-group">
                  <button onClick={() => handleSaveEdit(device.id)} className="save-button">Salvar</button>
                  <button onClick={handleCancelEdit} className="cancel-button">Cancelar</button>
                </div>
              </>
            ) : (
              <>
                <span>{device.name}</span>
                <span>{device.status}</span>
                <span>{device.location}</span>
                <div className="button-group">
                  <button onClick={() => handleEdit(device)} className="edit-button">Editar</button>
                  <button onClick={() => handleDelete(device.id)} className="delete-button">Excluir</button>
                  <Link to={`/device/${device.id}`} className="details-button">Detalhes</Link>
                  <Link to={`/devices/${device.id}/logs`} className="logs-button">Logs</Link>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceList;
