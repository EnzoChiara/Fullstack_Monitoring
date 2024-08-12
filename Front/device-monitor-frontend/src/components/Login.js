import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

/**
 * Componente de login para autenticação de usuário.
 */
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  /**
   * Função chamada ao submeter o formulário de login.
   * 
   * @param {Object} e - Evento de submit do formulário.
   */
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Verificar credenciais
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('loggedIn', 'true');
      navigate('/');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Usuário</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
