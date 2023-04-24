import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

import Profile from "./components/Profile";
import Startpage from "./components/Startpage";
import Register from "./components/Register";
import useAuth from "./hooks/useAuth";
import AllPosts from "./components/AllPosts";
import AfterLoginHeader from "./components/AfterLoginHeader";

function App() {
  const { token, user } = useAuth();

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Startpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/welcome" element={<AfterLoginHeader />} />
      </Routes>
    </div>
  );
}

export default App;
