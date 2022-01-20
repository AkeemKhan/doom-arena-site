import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header"
import LargeCarousel from './components/LargeCarousel';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Arenas from "./components/Arenas";
import Download from "./components/Download";
import Guide from "./components/Guide";

function App() {
  return (
      <Router>        
        <div className="App">
            <Header/>
            <Routes className="paddingTop">
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path="/home" element={<Home />}/>
                <Route path='/guide' element={<Guide />} />
                <Route path='/arenas' element={<Arenas />} />
                <Route path='/download' element={<Download />} />
                <Route path='/about' element={<About />} />          
            </Routes>
        </div>
      </Router>
  );
}

export default App;

