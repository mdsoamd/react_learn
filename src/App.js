import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { useState,useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  
  return (
    <Router>
    <div className="App">
      <Header />
      
     

     <Routes>
       
       {/* Home */}
      <Route path="/" element={<Home/>}/>
       
       {/* About */}
      <Route path="about" element={<About/>}/>
      
      {/* contact */}
      <Route path="contact" element={<Contact/>}/>

      {/* Error Page not Fount */}
      <Route path="*" element={<Error/>}/>

     </Routes>
      
      
    </div>

    </Router>

  );
}

export default App;
