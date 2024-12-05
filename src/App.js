import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import Header from "./components/Header";
import './assets/style/style.css';
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
