import { useContext } from 'react';
import { AuthContext } from '../store/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const salir = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="caja">
      <h1>Panel Privado</h1>
      <p>Bienvenido, <strong>{user?.name}</strong>.</p>
      <p>Si ves esto es porque el Lazy Loading y la ruta privada funcionan.</p>
      <hr />
      <button className="rojo" onClick={salir}>Cerrar Sesión</button>
    </div>
  );
}