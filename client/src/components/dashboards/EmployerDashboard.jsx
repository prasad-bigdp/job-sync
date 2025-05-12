import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import EmployerNavBar from "./EmployerNavBar";
import EmployerSidebar from "./EmployerSidebar";
import EmployerCharts from "./EmployerCharts";

export default function EmployerDashboard() {
  const { auth } = useAuth();
  const [employerData, setEmployerData] = useState(null);
   const [activeTab, setActiveTab] = useState('Dashboard');


  useEffect(() => {
    const fetchEmployerDashboard = async () => {
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
        console.log("employerdashboard", response.data);
      } catch (err) {
        console.error("Error fetching employer dashboard:", err);
      }
    };

    if (auth.token && auth.role === "employer") {
      fetchEmployerDashboard();
    }
  }, [auth]);

  if (!auth.token || auth.role !== "employer") {
    return <Navigate to="/EmployerLogin"/>;
  }

  if (!employerData) {
    return (
      <div className="text-center mt-10">
        <p>Loading user data...</p>
      </div>
    );
  }

  return (
    
      <div className="h-screen bg-gray-50 overflow-hidden">
      <EmployerSidebar activeTab={activeTab} setActiveTab={setActiveTab} employer={employerData}/>
      <EmployerNavBar employer={employerData} />
      <EmployerCharts />
    </div>

  );
}
