import React from "react";
import "./styles/index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import PostIdPages from "./pages/PostIdPages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/posts" element={<Posts />}></Route>
        <Route path="/" element={<Navigate replace to="/posts" />} />
        <Route exact path="/posts/posts/:id" element={<PostIdPages />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
