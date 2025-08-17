import React, { useState } from 'react';

export default function LeaveRequest() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [reason, setReason] = useState("");

  function submitLeave(e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    fetch("http://localhost:3001/leaves", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ employee: user.name, from, to, reason })
    }).then(() => alert("Leave request sent!"));
  }

  return (
    <div className="form-box">
      <h2>Leave Request</h2>
      <form onSubmit={submitLeave}>
        <input value={from} onChange={e => setFrom(e.target.value)} placeholder="From (YYYY-MM-DD)" />
        <input value={to} onChange={e => setTo(e.target.value)} placeholder="To (YYYY-MM-DD)" />
        <input value={reason} onChange={e => setReason(e.target.value)} placeholder="Reason" />
        <button>Submit</button>
      </form>
    </div>
  );
}
