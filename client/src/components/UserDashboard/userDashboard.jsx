import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("UserLogin");
    console.log(user,"123")

    
    if (!user) {
      navigate("/UserLogin"); // Redirect to login if no user is found
    }
  }, [navigate]);

  return (
    <div>
      Welcome to userDashboard
    </div>
  );
}

export default UserDashboard;
