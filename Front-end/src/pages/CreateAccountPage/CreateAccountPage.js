import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CreateAccountPage.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import LoginCard from "../../containers/LoginCard/LoginCard";
import InputBar from "../../components/InputBar/InputBar";
import * as Fetch from "../../utils/Fetch";
import * as Commons from "../../commons/commons";

const CreateAccountPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState("");

  async function checkValidation() {
    if (username === "" || password === "" || email === "") return;
    let data = await Fetch.POST(
      `${Commons.DOMAIN}${Commons.PORT}/auth/register`,
      { username, email, password }
    );
    console.log(data);
    if (!data || !data.data || !data.data.valid) {
      setShowMessage(data.data.message);
    } else {
      history.push("/");
    }
  }
  return (
    <LoginCard title="create an account">
      {showMessage !== "" && <div>{showMessage}</div>}
      <InputBar type="text" placeholder="Username" onChange={setUsername} />
      <InputBar type="email" placeholder="Email" onChange={setEmail} />
      <InputBar type="password" placeholder="Password" onChange={setPassword} />
      <CustomButton onClick={checkValidation} value={null}>
        Create an account
      </CustomButton>
    </LoginCard>
  );
};

export default CreateAccountPage;
