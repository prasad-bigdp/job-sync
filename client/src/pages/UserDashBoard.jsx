import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default function UserDashboard() {
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUserDashboard = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/users/user-dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data.user);
      } catch (err) {
        console.error('Error fetching user dashboard:', err);
      }
    };

    if (token) {
      fetchUserDashboard();
    }
  }, [token]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (!userData) {
    return (
      <div className="text-center">
        <p>Loading user data...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">User Dashboard</h1>
      <div>
        <h2 className="font-semibold">Welcome, {userData.name}!</h2>
        <p>Email: {userData.email}</p>
        <p>Phone: {userData.phone}</p>
      </div>
    </div>
  );
}
