import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Narwhal from '../Narwhal/Narwhal';
import Whale from '../Whale/Whale';
import { Blue } from '../Whale/Blue';


export default function AppRouter() {
  return (
    <BrowserRouter>
    <nav>
        <ul>
            <li><Link to="/">Narwhal</Link></li>
            <li><Link to="whale">Whale</Link></li>
            <li><Link to="whale/beluga">Beluga Whale</Link></li>
            <li><Link to="whale/blue">Blue Whale</Link></li>
        </ul>
    </nav>
        <Routes>
          <Route path="/" element={<Narwhal/>}></Route>
          <Route path="whale" element={<Whale/>}>
        </Route>        
        </Routes>
      </BrowserRouter>
  )
}