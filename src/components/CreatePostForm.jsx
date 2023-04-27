import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { createPost } from "../api/post";
import { useNavigate } from "react-router-dom";

export default function CreatePostForm({ posts, setPosts }) {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  // Step 1:
  // control each input w a state value
  // example value={title} onChcnage={(e)=>setTitle(e.target.value)}
  async function handleSubmit(e) {
    e.preventDefault();
    const APIdata = await createPost(
      token,
      title,
      description,
      price,
      willDeliver
    );
    const newPostsList = [...posts, APIdata.data.newPost];
    setToken(token);
    setPosts(newPostsList);
    setTitle("");
    setDescription("");
    setPrice("");
    setWillDeliver(false);

    navigate("/");

    // take all the state values, and pass it into createPost
    // Dont forget to pull the token out of useAuth
    // await createPost(token, ....)
    // maybe navigate back home?
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Description
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Price
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
          />
        </label>
        <label>
          Will Deliver?
          <input
            value={willDeliver}
            onChange={() => setWillDeliver(!willDeliver)}
            type="checkbox"
          />
        </label>
        <button>Create Post</button>
      </form>
    </div>
  );
}
