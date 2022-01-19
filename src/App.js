import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header"
import LargeCarousel from './components/LargeCarousel';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Arenas from "./components/Arenas";

function App() {
  return (
      <Router>        
        <div className="App">
            <Header/>
            <Routes className="paddingTop">
                <Route path="/home" element={<Home />}/>
                <Route path='/about' element={<About />} />          
                <Route path='/arenas' element={<Arenas />} />
            </Routes>
        </div>
      </Router>
  );
}

export default App;

