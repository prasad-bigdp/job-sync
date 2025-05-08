import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default function EmployerDashboard() {
  const [employerData, setEmployerData] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchEmployerDashboard = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/employers/employer-dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setEmployerData(response.data.employer);
        console.log('employerdashbord',response.data)
      } catch (err) {
        console.error('Error fetching employer dashboard:', err);
      }
    };

    if (token) {
      fetchEmployerDashboard();
    }
  }, [token]);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (!employerData) {
    return (
      <div className="text-center">
        <p>Loading user data...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">Employer Dashboard</h1>
      <div>
        <h2 className="font-semibold">Welcome, {employerData.name}!</h2>
        <p>Email: {employerData.email}</p>
        <p>Phone: {employerData.phone}</p>
      </div>
    </div>
  );
}
