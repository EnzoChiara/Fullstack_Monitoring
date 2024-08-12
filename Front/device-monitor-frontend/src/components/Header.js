import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css'; 

/**
 * Componente de cabeçalho com links para navegação e botão de logout.
 */
function Header() {
  const navigate = useNavigate();

  /**
   * Função chamada ao clicar no botão de logout.
   */
  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    navigate('/login');
  };

  return (
    <header>
      <nav>
        <Link to="/">Lista de Dispositivos</Link>
        <Link to="/alerts">Alertas</Link>
        <Link to="/device/new">Novo Dispositivo</Link>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </nav>
    </header>
  );
}

export default Header;
