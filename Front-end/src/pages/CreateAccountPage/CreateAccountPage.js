import React, { useState } from "react";
import "./CreateAccountPage.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import LoginCard from "../../containers/LoginCard/LoginCard";
import InputBar from "../../components/InputBar/InputBar";

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
    <LoginCard title="create an account">
      {showMessage && <div>{data.message}</div>}
      <InputBar type="text" placeholder="Username" onChange={setUsername} />
      <InputBar type="email" placeholder="Email" onChange={setUsername} />
      <InputBar type="password" placeholder="Password" onChange={setPassword} />
      <CustomButton onClick={checkValidation} value={null}>
        Create an account
      </CustomButton>
    </LoginCard>
  );
};

export default CreateAccountPage;
