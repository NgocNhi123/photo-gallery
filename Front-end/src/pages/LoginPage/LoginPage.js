import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./LoginPage.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import LoginCard from "../../containers/LoginCard/LoginCard";
import InputBar from "../../components/InputBar/InputBar";
import * as Fetch from "../../utils/Fetch";
import * as Commons from "../../commons/commons";

const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState(true);

  async function checkValidation() {
    let data = await Fetch.POST(`${Commons.DOMAIN}${Commons.PORT}/auth/login`, {
      email,
      password,
    });
    if (!data || !data.data || !data.data.valid) {
      setValidation(false);
    } else {
      setValidation(true);
      localStorage.setItem("auth-token", data.data.token);
      localStorage.setItem("username", data.data.username);
      localStorage.setItem("email", data.data.email);
      history.push("/home");
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (token) history.push("/home");
  });

  return (
    <LoginCard title="login">
      <InputBar type="email" placeholder="Email" onChange={setEmail} />
      <InputBar type="password" placeholder="Password" onChange={setPassword} />
      {!validation && (
        <div style={{ color: "red", fontWeight: "bold" }}>Invalid login</div>
      )}
      <CustomButton onClick={checkValidation} value={null}>
        Login
      </CustomButton>
      Or
      <CustomButton
        onClick={() => {
          history.push("/register");
        }}
        value={null}
      >
        Create an Account
      </CustomButton>
    </LoginCard>
  );
};

export default LoginPage;
