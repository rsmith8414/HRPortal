import React, { useEffect, useState } from 'react';

export default function HRDashboard() {
  const [employees, setEmployees] = useState([]);
  const [leaves, setLeaves] = useState([]);
  const [newEmp, setNewEmp] = useState({ name: "", position: "" });

  useEffect(() => {
    fetch("http://localhost:3001/employees")
      .then(res => res.json())
      .then(data => setEmployees(data));
    fetch("http://localhost:3001/leaves")
      .then(res => res.json())
      .then(data => setLeaves(data));
  }, []);

  function addEmployee(e) {
    e.preventDefault();
    fetch("http://localhost:3001/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmp)
    }).then(res => res.json())
      .then(added => setEmployees(prev => [...prev, added]));
  }

  function deleteEmployee(id) {
    fetch("http://localhost:3001/employees/" + id, { method: "DELETE" })
      .then(() => setEmployees(prev => prev.filter(emp => emp.id !== id)));
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>HR Dashboard</h2>
      <h3>Add Employee</h3>
      <form onSubmit={addEmployee}>
        <input placeholder="Name" value={newEmp.name} onChange={e => setNewEmp({ ...newEmp, name: e.target.value })} />
        <input placeholder="Position" value={newEmp.position} onChange={e => setNewEmp({ ...newEmp, position: e.target.value })} />
        <button>Add</button>
      </form>

      <h3>Current Employees</h3>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name} ({emp.position}) <button onClick={() => deleteEmployee(emp.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <h3>Leave Requests</h3>
      <ul>
        {leaves.map(l => (
          <li key={l.id}>
            {l.employee} - {l.from} to {l.to} ({l.reason})
          </li>
        ))}
      </ul>
    </div>
  );
}
