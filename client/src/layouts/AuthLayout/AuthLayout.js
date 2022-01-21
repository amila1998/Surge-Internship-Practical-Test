import "./authlayout.css";
import Login from "../../components/Login/login";
import Register from "../../components/Register/Register";
import ForgotPassword from "../../components/ForgotPassword/ForgotPassword";
import { useState } from "react";

const AuthLayout = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);
  const [forgot, setForgot] = useState(false);

  const handleLogin = () => {
    setLogin(true);
    setRegister(false);
    setForgot(false);
  };
  const handleRegister = () => {
    setLogin(false);
    setRegister(true);
    setForgot(false);
  };
  const handleForgot = () => {
    setLogin(false);
    setRegister(false);
    setForgot(true);
  };

  return (
    <div className="authlayout">
      {/* logo */}
      <div className="authlayout_logo">
      <img src="./assets/img/surge.jpg" alt="logo" />
      </div>
      {/* form */}
      {login && <Login />}
      {register && <Register />}
      {forgot && <ForgotPassword />}
      {/* actions */}
      <div className="authlayout_actions">
        <p
          className="authlayout_actions-l"
          onClick={login ? handleRegister : handleLogin}
        >
          {login ? "Register ?" : "Login ?"}
        </p>
        <p className="authlayout_actions-r" onClick={handleForgot}>
          Forgot Password ?
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;