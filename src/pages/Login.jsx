import { useState, useContext } from 'react';
import { AuthContext } from '../store/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const exito = login(username);
    
    if (exito) {
      navigate('/dashboard');
    } else {
      setError(true);
    }
  };

  return (
    <div className="caja">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <label>Usuario:</label>
        <input 
          type="text" 
          placeholder="Escribe admin" 
          value={username} 
          onChange={(e) => {
            setUsername(e.target.value);
            setError(false);
          }} 
        />
        
        {error && <p className="error">Usuario incorrecto (prueba 'admin')</p>}
        
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}