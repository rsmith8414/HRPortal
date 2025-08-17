import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      {user?.role === "employee" && <Link to="/employee">Employee</Link>}
      {user?.role === "hr" && <Link to="/hr">HR</Link>}
      {user && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
}
