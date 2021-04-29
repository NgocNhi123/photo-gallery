import React, { useState } from "react";
import "./CreateAccountPage.css";

const data = { valid: false, message: "username" };

const CreateAccountPage = ({ onClick }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  function checkValidation() {
    if (data.valid) onClick(true);
    else setShowMessage(true);
  }
  return (
    <form action="" className="log-in">
      {showMessage && <div>{data.message}</div>}
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="button" onClick={checkValidation}>
        Create an account
      </button>
    </form>
  );
};

export default CreateAccountPage;
