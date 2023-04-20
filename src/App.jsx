import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

import Profile from "./components/Profile";
import LogIn from "./components/LogIn";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
