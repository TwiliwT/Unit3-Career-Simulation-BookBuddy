import { useState } from "react";
import { registerUser } from "../API";
import { Link, useNavigate } from "react-router-dom";

export default function Register({ setToken }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userObj = {
      firstName,
      lastName,
      email,
      password,
    };
    const nextToken = await registerUser(userObj);
    setToken(nextToken);
    navigate("/account");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:{" "}
          <input
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          ></input>
        </label>
        <label>
          Last Name:{" "}
          <input
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          ></input>
        </label>
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
        <button>Register</button>
      </form>
      <Link to="/Login">Already have an account? Click her to sign in.</Link>
    </>
  );
}