import React, { useState } from "react";
import "./LoginPage.css";

const defaultAccount = { id: "123", password: "123" };

const LoginPage = ({ onClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState(true);

  function checkValidation() {
    if (username === defaultAccount.id && password === defaultAccount.password)
      onClick(true);
    else {
      setValidation(false);
    }
  }

  return (
    <form action="" className="log-in">
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {!validation && <div>Invalid login</div>}
      <button type="button" onClick={checkValidation}>
        Login
      </button>
      <button>Create an Account</button>
    </form>
  );
};

export default LoginPage;
