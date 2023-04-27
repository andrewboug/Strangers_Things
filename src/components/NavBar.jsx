import React from "react";
import Login from "./Login";
import useAuth from "../hooks/useAuth";

export default function NavBar() {
  const { token } = useAuth();
  return (
    <div>
      <h1>Stranger's Things</h1>
      {!token && <Login />}
    </div>
  );
}
