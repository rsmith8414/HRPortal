import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [mail , setMail] = useState("");  // using 'mail' instead of 'email'
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    console.log("Trying to login with", mail);
    fetch("http://localhost:3001/users")
    .then(response => response.json())
    .then(allUsers => {
      const found = allUsers.find(u => u.email === mail && u.password === pass);
      if(found){
        localStorage.setItem("user", JSON.stringify(found))
        if(found.role === "hr"){
          navigate("/hr");
        } else {
          navigate("/employee");
        }
      } else {
        alert("check credentials maybe?");
      }
    })
  }

  return (
    <div className="form-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input value={mail} onChange={e => setMail(e.target.value)} placeholder="Email" />
        <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  )
}
