import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminPage: React.FC = () => {
    const { userInfo } = useSelector((state: any) => state.auth);
 
    console.log(userInfo);
    if (!userInfo || userInfo.role !== "admin") {
      return <Navigate to="/homepage" />; 
    }
  
    return (
      <div>
        <h1>Welcome to the Admin Page</h1>

      </div>
    );
  };

export default AdminPage;
