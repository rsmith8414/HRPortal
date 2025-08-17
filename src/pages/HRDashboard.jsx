import React, { useEffect, useState } from 'react';

export default function HRDashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(data => setEmployees(data.filter(u => u.role === "employee")));
  }, []);

  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <h2>HR Dashboard</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {employees.map(emp => (
          <li key={emp.id}>{emp.name} - {emp.email}</li>
        ))}
      </ul>
    </div>
  );
}
