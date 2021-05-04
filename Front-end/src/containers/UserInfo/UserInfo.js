import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./UserInfo.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import LoginCard from "../../containers/LoginCard/LoginCard";
import InputBar from "../../components/InputBar/InputBar";
import * as Fetch from "../../utils/Fetch";
import * as Commons from "../../commons/commons";

const UserInfo = () => {
  const history = useHistory();
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showMessage, setShowMessage] = useState("");

  async function changeInformation() {
    if (confirmPassword !== password)
      setShowMessage("Passwords are not matching");
    else {
      const data = await Fetch.POST(
        `${Commons.DOMAIN}${Commons.PORT}/auth/updatePassword`,
        { newPass: password }
      );
      if (data.data.valid) setShowMessage(data.data.message);
      else setShowMessage("Something went wrong, Please try again later");
      console.log(data);
    }
  }

  function logOut() {
    localStorage.removeItem("auth-token");
    history.push("/");
  }

  return (
    <div className="user-info">
      <LoginCard title={username}>
        <h4>{email}</h4>
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
          <div
            style={{ color: "red", fontWeight: "bold", textAlign: "center" }}
          >
            {showMessage}
          </div>
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
