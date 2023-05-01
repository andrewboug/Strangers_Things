import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/post";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AllPost() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [searchPosts, setSearchPosts] = useState("");
  console.log(posts);
  useEffect(() => {
    async function getAllPost() {
      const getPosts = await fetchPosts();
      setPosts(getPosts.data.posts);
    }
    getAllPost();
  }, []);
  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchPosts);
  });

  return (
    <div>
      <h1>All Posts</h1>
      <div>
        <input
          className="searchForm"
          type="text"
          placeholder="Search here"
          onChange={(e) => {
            setSearchPosts(e.target.value.toLowerCase());
          }}
        />
      </div>
      <div>
        {posts.length > 0 &&
          searchPosts &&
          filteredPosts.map((post) => {
            return (
              <div>
                <div key={post._id}>
                  <h3>{post.title}</h3>
                  <p>Description: {post.description}</p>
                  <p>Price: {post.price}</p>
                  <p>Location: {post.location}</p>
                  <p>Will Deliver?: {post.willDeliver.toString()}</p>
                  <p>User: {post.author.username}</p>
                  <button>
                    <Link to={`/MessageForm/${post._id}`}>
                      Message {post.author.username}
                    </Link>
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <button className="button" onClick={() => navigate("/create")}>
        Add New Post
      </button>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>Price: {post.price}</p>
            <p>Location: {post.location}</p>
            <p>Will Deliver?: {post.willDeliver.toString()}</p>
            <p>Seller: {post.author.username}</p>
            <button>
              <Link to={`/MessageForm/${post._id}`}>
                Message {post.author.username}
              </Link>
            </button>
          </div>
        );
      })}
    </div>
  );
}
