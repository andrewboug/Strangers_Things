import React from "react";

export default function LogIn() {
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
    </div>
  );
}
