import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/post";
import { useNavigate } from "react-router-dom";

export default function AllPost() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    async function getAllPost() {
      const getPosts = await fetchPosts();
      setPosts(getPosts.data.posts);
    }
    getAllPost();
  }, []);
  return (
    <div>
      <button onClick={() => navigate("/create")}>Add New Post</button>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>Price: {post.price}</p>
            <p>Seller: {post.author.username}</p>
            <p>Location: {post.location}</p>
            <p>Will Deliver?: {post.willDeliver.toString()}</p>
            <button>Contact Seller</button>
          </div>
        );
      })}
    </div>
  );
}
