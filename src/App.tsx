import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Narwhal from "./components/Narwhal/Narwhal";
import Whale from "./components/Whale/Whale";
function App() {
  return (
    <div className="wrapper">
      <h1> Example For Router with Marine Animals</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Narwhal/>}></Route>
          <Route path="/whale" element={<Whale/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
