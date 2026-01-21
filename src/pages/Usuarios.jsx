import { useEffect, useState } from 'react';
import { getUsers } from '../services/api';

export default function Usuarios() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul className="lista-usuarios">
        {users.map(user => (
          <li key={user.id} className="usuario-item">
            <strong>Nombre:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}