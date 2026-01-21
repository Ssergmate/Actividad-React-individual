import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="card" style={{textAlign: 'center', padding: '4rem 2rem'}}>
      <h1>Gestión Escolar SPA</h1>
      <p>Práctica de React con Router, Lazy Loading y Autenticación.</p>
      <div style={{marginTop: '2rem'}}>
        <Link to="/login" className="btn">Ir al Login</Link>
      </div>
    </div>
  );
}