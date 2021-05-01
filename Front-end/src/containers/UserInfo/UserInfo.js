import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./UserInfo.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import LoginCard from "../../containers/LoginCard/LoginCard";
import InputBar from "../../components/InputBar/InputBar";

const UserInfo = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [showMessage, setShowMessage] = useState("");

  function changeInformation() {
    if (retypePassword !== password) setShowMessage("Password doesn't match");
  }

  function logOut() {
    localStorage.removeItem("auth-token");
    history.push("/");
  }

  return (
    <div className="user-info">
      <LoginCard title={username || "default"}>
        {showMessage !== "" && <div>{showMessage}</div>}
        <InputBar type="email" placeholder="Email" onChange={setUsername} />
        <InputBar
          type="password"
          placeholder="Password"
          onChange={setPassword}
        />
        <InputBar
          type="password"
          placeholder="Retype Password"
          onChange={setRetypePassword}
        />
        <br />
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
