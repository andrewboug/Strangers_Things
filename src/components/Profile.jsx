import React from "react";
import AfterLoginHeader from "./AfterLoginHeader";

export default function Profile() {
  return (
    <div>
      <AfterLoginHeader />
      <h1>User's Profile</h1>
      <h3>About:</h3>
      <p>I am really cool</p>
      <h3>My posts:</h3>
      <button>Create New Post</button>
    </div>
  );
}
