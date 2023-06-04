import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Narwhal from '../Narwhal/Narwhal';
import Whale from '../Whale/Whale';

export default function AppRouter() {
  return (
    <BrowserRouter>
    <nav>
        <ul>
            <li><Link to="/">Narwhal</Link></li>
            <li><Link to="/whale">Whale</Link></li>
        </ul>
    </nav>
        <Routes>
          <Route path="/" element={<Narwhal/>}></Route>
          <Route path="/whale" element={<Whale/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}