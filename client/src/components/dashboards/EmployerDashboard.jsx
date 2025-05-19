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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 
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
  }, [auth, navigate, logout]);

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
    <div className="flex h-screen bg-gray-50">
      <EmployerSidebar activeTab={activeTab} setActiveTab={setActiveTab} employer={employerData} sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <EmployerNavBar employer={employerData} setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 overflow-y-auto bg-gray-50">
          <EmployerCharts />
        </main>
      </div>

    </div>
  );
}
