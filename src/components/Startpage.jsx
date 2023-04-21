import React from "react";
import { useNavigate } from "react-router-dom";

export default function Startpage() {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Log In</h3>
      <form>
        <label>
          Username:
          <input name="username" type="text" />
        </label>
        <label>
          Password:
          <input name="password" type="text" />
        </label>
      </form>
      <button>Log in to Stranger's Things!!!!!!!</button>
      <button>New User? Click here to register</button>
    </div>
  );
}
