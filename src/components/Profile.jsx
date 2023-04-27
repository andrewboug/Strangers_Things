import React from "react";

import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const { token, user, setToken } = useAuth();
  return (
    <div>
      {token ? <h2>{user.username}'s Profile</h2> : null}
      <h3>About:</h3>
      <p>I am really cool</p>
      <h3>My posts:</h3>
      <button onClick={() => navigate("/create")}>Create New Post</button>
    </div>
  );
}
