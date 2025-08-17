import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import EmployeeDashboard from './pages/EmployeeDashboard';
import HRDashboard from './pages/HRDashboard';
import NotFound from './pages/NotFound';

export default function App() {
  const currentUser = JSON.parse(localStorage.getItem("user")); // was 'user' before

  return (
    <>
      <h1>HR Portal</h1>
      <NavBar />
      {/* this handles routing */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employee" element={currentUser?.role === "employee" ? <EmployeeDashboard /> : <Navigate to="/login" />} />
        <Route path="/hr" element={currentUser?.role === "hr" ? <HRDashboard /> : <Navigate to="/login" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
