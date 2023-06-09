import React, { useState } from "react";
import { registerUser } from "../api/users";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setToken, user } = useAuth();
  console.log("User from RegisterForm: ", user);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await registerUser(username, password);
      console.log("Result in Component: ", result);
      setToken(result.data.token);
      localStorage.setItem("token", result.data.token);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>Register for Stranger's Things</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button">Submit</button>
      </form>
      <Link className="link" to="/">
        Already have an account? Click here to Log in
      </Link>
    </div>
  );
}
