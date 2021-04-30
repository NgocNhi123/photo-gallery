import React from "react";
import "./LoginCard.css";

const LoginCard = ({ children, title }) => {
  return (
    <div className="login-card">
      <div className="login-card-content">
        <div className="login-card-title">{title}</div>
        {children}
      </div>
    </div>
  );
};

export default LoginCard;
