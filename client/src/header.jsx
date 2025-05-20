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
    <nav className="bg-purple-800 p-4 flex justify-end">
  <div className="flex gap-5 text-white">
    <Link to="/" className="text-white [text-decoration:none] ">Home</Link>
    <Link to="/about" className="text-white no-underline  ">About</Link>
    {isLoggedIn ? (
      <button onClick={handleLogout} className="text-white no-underline  ">
        Logout
      </button>
    ) : (
      <Link to="/login" className="text-white hover:underline">Login</Link>
    )}
  </div>
</nav>
  );
}
