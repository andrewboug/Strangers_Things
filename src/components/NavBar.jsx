import React from "react";
import Login from "./Login";
import useAuth from "../hooks/useAuth";
import AfterLoginHeader from "./AfterLoginHeader";

export default function NavBar() {
  const { token } = useAuth();
  return (
    <div>
      <h1>Stranger's Things</h1>
      {!token && <Login />}
      {token && <AfterLoginHeader />}
    </div>
  );
}
