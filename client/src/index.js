import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import './global.css';
import Home from './pages/home';
import Details from './pages/details/Details';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/details/:id' element={<Details />}/>
    </Routes>
    </BrowserRouter>
);

