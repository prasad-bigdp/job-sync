
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { jwtDecode } from 'jwt-decode';

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const logoutTimer = useRef(null);

  useEffect(() => {
    const checkTokenValidity = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/'); 
        return false;
      }

      try {
        const decoded = jwtDecode(token);
        if (Date.now() / 1000 >= decoded.exp) {
          localStorage.clear();
          navigate('/'); 
          return false;
        }

        const msLeft = decoded.exp * 1000 - Date.now();
        logoutTimer.current = setTimeout(() => {
          localStorage.clear();
          navigate('/'); 
        }, msLeft);

        return true;
      } catch {
        localStorage.clear();
        navigate('/'); 
        return false;
      }
    };

    checkTokenValidity();

    return () => clearTimeout(logoutTimer.current);
  }, [location, navigate]);

  const token = localStorage.getItem('token');
  return token ? children : null;
}