import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function AfterLoginHeader() {
  const { token, user, setToken } = useAuth();
  return (
    <div>
     {token ? <p>Welcome, {user.username}</p> : null} 
      <Link to="/posts">Posts </Link>
      <Link to="/profile">Profile </Link>
      <Link to="/">Logout </Link>
    </div>
  );
}
