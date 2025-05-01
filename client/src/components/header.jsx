import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [location]); // Runs whenever the route changes

  const handleLogout = () => {
    localStorage.removeItem('token');
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
