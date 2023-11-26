import { useState } from "react";
import { loginUser } from "../API";
import { Link, useNavigate } from "react-router-dom";

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
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email:{" "}
          <input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></input>
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></input>
        </label>
        <button>Login</button>
      </form>
      <Link to="/register">Don't have an account? Click here to sign up.</Link>
    </>
  );
}
