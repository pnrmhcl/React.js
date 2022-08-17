import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
