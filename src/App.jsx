import { Routes, Route, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Usuarios from './pages/Usuarios';
import PrivateRoute from './router/PrivateRoute';
import { AuthProvider } from './store/AuthContext';

const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <AuthProvider>
      {/* Navegación simple */}
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/usuarios">Usuarios API</Link>
        <Link to="/dashboard">Dashboard (Privado)</Link>
        <Link to="/login">Login</Link>
      </nav>

      {/* Contenido */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/usuarios" element={<Usuarios />} />
          
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>
                <Suspense fallback={<p>Cargando...</p>}>
                  <Dashboard />
                </Suspense>
              </PrivateRoute>
            } 
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;