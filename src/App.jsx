import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

import Profile from "./components/Profile";

import Register from "./components/Register";
import useAuth from "./hooks/useAuth";
import AllPosts from "./components/AllPosts";
import CreatePost from "./components/CreatePost";

function App() {
  const { token, user } = useAuth();

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<AllPosts />} />
      </Routes>
    </div>
  );
}

export default App;
