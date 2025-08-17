import React from 'react';

export default function EmployeeDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <h2>Employee Dashboard</h2>
      <p>Welcome, {user?.name}</p>
    </div>
  );
}
