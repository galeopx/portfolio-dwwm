import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import './assets/style/style.css';
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes> 
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/Services" element={<Services />}>Services</Route>
          <Route path="/Portfolio" element={<Portfolio />} >Portfolio</Route>
          <Route path="/Contact" element={<Contact />} >Contact</Route>
          <Route path="/MentionsLegales" element={<MentionsLegales />} >Mentions Légales</Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
