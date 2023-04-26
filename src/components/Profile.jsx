import React from "react";
import AfterLoginHeader from "./AfterLoginHeader";
import useAuth from "../hooks/useAuth"; 

export default function Profile() {
  const {token, user, setToken} = useAuth();
  return (
    <div>
      <AfterLoginHeader />
      {token ? <h2>{user.username}'s Profile</h2> : null} 
      <h3>About:</h3>
      <p>I am really cool</p>
      <h3>My posts:</h3>
      <button>Create New Post</button>
    </div>
  );
}
