import { useState } from "react";
import { loginUser } from "../API";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Login.css";

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userObj = {
      email,
      password,
    };
    const nextToken = await loginUser(userObj);
    setToken(nextToken);
    navigate("/account");
  };

  return (
    <main>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="email-container">
            <label>
              <p className="label-email">Email:</p>
              <input
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              ></input>
            </label>
          </div>
          <div className="password-container">
            <label>
              <p className="label-password">Password:</p>
              <input
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              ></input>
            </label>
          </div>

          <button>Login</button>
        </form>
        <Link to="/register">Don't have an account? Click here to sign up.</Link>
      </div>
      
    </main>
  );
}
