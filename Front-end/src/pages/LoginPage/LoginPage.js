import React, { useState } from "react";
import "./LoginPage.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import LoginCard from "../../containers/LoginCard/LoginCard";
import InputBar from "../../components/InputBar/InputBar";

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
    <LoginCard title="login">
      <InputBar type="text" placeholder="Username" onChange={setUsername} />
      <InputBar type="password" placeholder="Password" onChange={setPassword} />
      {!validation && <div>Invalid login</div>}
      <CustomButton onClick={checkValidation} value={null}>
        Login
      </CustomButton>
      Or
      <CustomButton onClick={null} value={null}>
        Create an Account
      </CustomButton>
    </LoginCard>
  );
};

export default LoginPage;
