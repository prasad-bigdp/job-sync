import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsLoggedIn(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const isExpired = Date.now() >= decoded.exp * 1000;

      if (isExpired) {
        localStorage.clear();
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    } catch (err) {
      console.error("Token decode error:", err);
      localStorage.clear();
      setIsLoggedIn(false);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-end">
      <div className="me-7 flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="hover:underline">
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
