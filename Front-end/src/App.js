import React, { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage/CreateAccountPage";

function App() {
  const [isValid, setIsValid] = useState(false);
  return (
    <div className="container">
      {/* {!isValid && <LoginPage onClick={setIsValid} />} */}
      {!isValid && <CreateAccountPage onClick={setIsValid} />}
      {isValid && <MainPage />}
    </div>
  );
}

export default App;
