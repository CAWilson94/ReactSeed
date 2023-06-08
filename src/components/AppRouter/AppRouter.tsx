import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Whale from '../Whale/Whale';
import Home from '../Narwhal/Home';
import { UserContext } from '../../stores/UserContext';



export default function AppRouter() {

  
  const [value, setValue] = React.useState<string>('Hello from context');

  return (
    <BrowserRouter>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="whale">About</Link></li>
        </ul>
    </nav>
    <UserContext.Provider value={{value, setValue}}>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="whale" element={<Whale/>}></Route>
        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
  )
}