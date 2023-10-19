import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';


function App() {
  return (
    <div className="App">
         <Router>
            <div>
              <Navbar/>
            </div>
            <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
            </Routes>
         </Router>

    </div>
  );
}

export default App;
