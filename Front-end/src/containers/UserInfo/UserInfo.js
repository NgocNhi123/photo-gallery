import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./UserInfo.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import LoginCard from "../../containers/LoginCard/LoginCard";
import InputBar from "../../components/InputBar/InputBar";

const UserInfo = () => {
  const history = useHistory();
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showMessage, setShowMessage] = useState("");

  function changeInformation() {
    if (confirmPassword !== password)
      setShowMessage("Passwords are not matching");
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
  }

  function logOut() {
    localStorage.removeItem("auth-token");
    history.push("/");
  }

  return (
    <div className="user-info">
      <LoginCard title={username || "default"}>
        <InputBar
          type="text"
          placeholder={username || "Username"}
          onChange={setUsername}
        />
        <InputBar
          type="email"
          placeholder={email || "Email"}
          onChange={setEmail}
        />
        <InputBar
          type="password"
          placeholder="New Password"
          onChange={setPassword}
        />
        <InputBar
          type="password"
          placeholder="Confirm Password"
          onChange={setConfirmPassword}
        />
        <br />
        {showMessage !== "" && (
          <div style={{ color: "red", fontWeight: "bold" }}>{showMessage}</div>
        )}
        <CustomButton onClick={changeInformation} value={null}>
          Update Information
        </CustomButton>
        <CustomButton onClick={logOut} value={null}>
          Log out
        </CustomButton>
      </LoginCard>
    </div>
  );
};

export default UserInfo;
