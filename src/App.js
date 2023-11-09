import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import Register from "./Components/Register";
import UserHome from "./Components/UserHome";
function App()
{
        return<div className="container">
          <BrowserRouter>
             <Menu/>   
             <br/><br/>
             <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/userHome" element={<UserHome/>}></Route>
             </Routes>
          </BrowserRouter>
        </div>
    }

export default App;