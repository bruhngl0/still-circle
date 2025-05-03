import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./components/Video"; // Import your Video component
import "./App.css";
import Info from "./components/Info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Video />} /> {/* Home page route */}
        <Route path="/info" element={<Info />} /> {/* Experience page route */}
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
