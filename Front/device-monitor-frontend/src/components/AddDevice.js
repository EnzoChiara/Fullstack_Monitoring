import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddDevice.css';

/**
 * Componente para adicionar um novo dispositivo.
 */
const AddDevice = () => {
  // Estado para armazenar as informações do dispositivo
  const [device, setDevice] = useState({
    name: '',
    status: '',
    location: '',
  });

  /**
   * Função chamada quando há mudanças nos campos do formulário.
   * Atualiza o estado do dispositivo com os novos valores.
   * 
   * @param {Object} e - Evento de alteração do formulário.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDevice({ ...device, [name]: value });
  };

  /**
   * Função chamada quando o formulário é enviado.
   * Faz uma requisição POST para criar um novo dispositivo.
   * 
   * @param {Object} e - Evento de submissão do formulário.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // URL da API para criação de dispositivos
    const apiUrl = 'http://localhost:8080/CreateDevices';

    // Requisição POST para criar um novo dispositivo
    axios.post(apiUrl, device)
      .then(response => {
        alert('Dispositivo criado com sucesso!');
        
        // Limpa o formulário após o sucesso
        setDevice({
          name: '',
          status: '',
          location: '',
        });
      })
      .catch(error => {
        alert('Erro ao criar dispositivo. Por favor, tente novamente.');
        console.error('Erro ao criar dispositivo:', error);
      });
  };

  return (
    <div className="add-device">
      <h2>Adicionar Novo Dispositivo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={device.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <input
            type="text"
            id="status"
            name="status"
            value={device.status}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Localização</label>
          <input
            type="text"
            id="location"
            name="location"
            value={device.location}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default AddDevice;
