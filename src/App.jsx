import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

import Profile from "./components/Profile";

import Register from "./components/Register";
import useAuth from "./hooks/useAuth";
import AllPosts from "./components/AllPosts";

import CreatePostForm from "./components/CreatePostForm";
import MessagingComponent from "./components/MessagingComponent";

function App() {
  const { token, user } = useAuth();

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreatePostForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/MessageForm/:postId" element={<MessagingComponent/>} />
        <Route path="/" element={<AllPosts />} />
      </Routes>
    </div>
  );
}

export default App;
