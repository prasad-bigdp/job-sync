import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Navigate } from "react-router-dom";
import EmployerNavBar from "./EmployerNavBar";
import EmployerSidebar from './EmployerSidebar';
import EmployerCharts from './EmployerCharts';

export default function EmployerDashboard() {
  const { auth, logout } = useAuth();
  const [employerData, setEmployerData] = useState(null);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ local loading
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployerDashboard = async () => {
      if (!auth.token || auth.role !== "employer") return;

      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/api/employers/employer-dashboard",
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        setEmployerData(response.data.employer);
      } catch (err) {
        setError(err.message || "Error fetching employer dashboard");
        if (err.response?.status === 401) {
          logout();
          navigate("/EmployerLogin");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchEmployerDashboard();
  }, [auth, navigate, logout]); // ✅ no `loading` here

  if (loading) {
    return (
      <div className="text-center mt-10">
        <p>Loading employer data...</p>
      </div>
    );
  }

  if (!auth.token || auth.role !== "employer") {
    return <Navigate to="/EmployerLogin" />;
  }

  if (error) {
    return <div className="text-center mt-10">Error: {error}</div>;
  }

  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      <EmployerSidebar activeTab={activeTab} setActiveTab={setActiveTab} employer={employerData} />
      <EmployerNavBar employer={employerData} />
      <EmployerCharts />
    </div>
  );
}
