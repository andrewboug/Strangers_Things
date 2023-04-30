import React, { useState, useEffect } from "react";
import { messagePost, fetchPosts } from "../api/post";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

async function updateMessageState(postId, setMessages, setPost) {
  const getPosts = await fetchPosts();
  let post = getPosts.data.posts.find((item) => item._id === postId);
  console.log(post);
  setMessages(post.messages || []);
  setPost(post);
}

const MessagingComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [post, setPost] = useState([]);
  const { postId } = useParams();
  const { token } = useAuth();

  useEffect(() => {
    // Fetch messages from the API

    updateMessageState(postId, setMessages, setPost);
  }, []);

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Send a new message to the API
    let response = await messagePost(newMessage, token, postId);
    setMessages([...messages, response.data.message]);
  };

  return (
    <div>
      {messages.map((message) => (
        <div key={message._id}>
          <p>From: {message.fromUser.username || message.fromUser}</p>
          <p>Message: {message.content}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Message"
          value={newMessage}
          onChange={handleNewMessageChange}
        />
        <button className="button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default MessagingComponent;
