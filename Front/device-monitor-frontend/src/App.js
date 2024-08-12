import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DeviceList from './components/DeviceList';
import DeviceDetails from './components/DeviceDetails';
import Alerts from './components/Alerts';
import DeviceLogs from './components/DeviceLogs';
import Header from './components/Header';
import AddDevice from './components/AddDevice';
import Login from './components/Login';
import './styles/App.css';

/**
 * Componente principal da aplicação, responsável pela configuração das rotas.
 */
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><DeviceList /></ProtectedRoute>} />
        <Route path="/device/:id" element={<ProtectedRoute><DeviceDetails /></ProtectedRoute>} />
        <Route path="/alerts" element={<ProtectedRoute><Alerts /></ProtectedRoute>} />
        <Route path="/devices/:deviceId/logs" element={<ProtectedRoute><DeviceLogs /></ProtectedRoute>} />
        <Route path="/device/new" element={<ProtectedRoute><AddDevice /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

/**
 * Componente para proteger rotas que requerem autenticação.
 * 
 * @param {Object} props - Props do componente.
 * @param {React.ReactNode} props.children - Componentes filhos a serem renderizados.
 */
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('loggedIn'); // Implementar autenticação real

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default App;
