import React, { useState } from "react";
import "./UserInfo.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import LoginCard from "../../containers/LoginCard/LoginCard";
import InputBar from "../../components/InputBar/InputBar";

const UserInfo = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState("");

  return (
    <div className="user-info">
      <LoginCard title={username || "default"}>
        {showMessage !== "" && <div>{showMessage}</div>}
        <InputBar type="text" placeholder="Username" onChange={setUsername} />
        <InputBar type="email" placeholder="Email" onChange={setUsername} />
        <InputBar
          type="password"
          placeholder="Password"
          onChange={setPassword}
        />
        <CustomButton onClick={null} value={null}>
          Update Information
        </CustomButton>
      </LoginCard>
    </div>
  );
};

export default UserInfo;
