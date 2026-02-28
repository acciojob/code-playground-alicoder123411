import React from "react";
import { useAuth } from "./auth";

const Login = () => {
  const { login } = useAuth();

  return (
    <div className="main-container">
      <h2>Login Page</h2>
      <button id="login-btn" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default Login;