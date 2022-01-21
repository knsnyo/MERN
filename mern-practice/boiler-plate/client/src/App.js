import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Auth from "./hoc/auth";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Navbar from "./components/views/NavBar/NavBar";
import VideoUploadPage from "./components/views/VideoUploadPage/VideoUploadPage";

function App() {
  const NewLandingPage = Auth(LandingPage, null);
  const NewLoginPage = Auth(LoginPage, false);
  const NewRegisterPage = Auth(RegisterPage, false);
  const NewVideoUploadPage = Auth(VideoUploadPage, true);

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<NewLandingPage />} />
        <Route exact path="/login" element={<NewLoginPage />} />
        <Route exact path="/register" element={<NewRegisterPage />} />
        <Route exact path="/video/upload" element={<NewVideoUploadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
