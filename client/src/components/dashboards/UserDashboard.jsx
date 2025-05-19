import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Navigate } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import UserNavBar from "./UserNavbar";
import UserDashboardPage from "./DashboardPage";

export default function UserDashboard() {
  const { auth, logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDashboard = async () => {
      if (!auth.token || auth.role !== "user") return;

      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/api/users/user-dashboard",
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        setUserData(response.data.user);
      } catch (err) {
        setError(err.message || "Error fetching user dashboard");
        if (err.response?.status === 401) {
          logout();
          navigate("/UserLogin");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserDashboard();
  }, [auth, navigate, logout]);

  if (!auth.token || auth.role !== "user") {
    return <Navigate to="/UserLogin" />;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-600">
        Loading user data...
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-10 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <UserSidebar user={userData} />
      <div className="flex flex-col flex-1 ">
        <UserNavBar user={userData} />
        <main className="mt-2">
          <UserDashboardPage />
        </main>
      </div>
    </div>
  );
}
