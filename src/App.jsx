import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

import Profile from "./components/Profile";

import Register from "./components/Register";
import useAuth from "./hooks/useAuth";
import AllPosts from "./components/AllPosts";
import AfterLoginHeader from "./components/AfterLoginHeader";
import Login from "./components/Login";

function App() {
  const { token, user } = useAuth();

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />

        <Route path="/register" element={<Register />} />
        <Route path="/" element={<AllPosts />} />
        <Route path="/welcome" element={<AfterLoginHeader />} />
      </Routes>
    </div>
  );
}

export default App;
