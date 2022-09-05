import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Doc from "./pages/Doc";

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doc/*" element={<Doc />} />
      </Routes>
    </div>
  );
}

export default App;
