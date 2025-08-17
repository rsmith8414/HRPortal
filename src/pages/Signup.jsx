import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [namer, setNamer] = useState("");  // weird name
  const [mail , setMail] = useState("");
  const [pass, setPass] = useState("");
  const nav = useNavigate();

  function sendSignup(e){
    e.preventDefault();

    const account = {
      name: namer,
      email: mail,
      password: pass,
      role: "employee"
    };

    // might work? hope so
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(account)
    }).then(() => {
      alert("Signed up!");
      nav("/login")
    });
  }

  return (
    <div className="form-box">
      <h2>Signup</h2>
      <form onSubmit={sendSignup}>
        <input value={namer} onChange={e => setNamer(e.target.value)} placeholder="Name" />
        <input value={mail} onChange={e => setMail(e.target.value)} placeholder="Email" />
        <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="Password" />
        <button>Signup</button>
      </form>
    </div>
  );
}
