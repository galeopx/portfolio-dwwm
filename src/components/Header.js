import React from "react";
import { Link } from "react-router-dom";
import Home from "../pages/Home";

const Header = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark position-sticky bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-light text-uppercase" href={<Home/>}>John Doe</a>
                    {/* On ajoute le menu hamburger de bootstrap pour le mobile, il ne s'affiche pas dans les autres versions */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex='-1' id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h2 className="offcanvas-title text-uppercase h5" id="offcanvasDarkNavbarLabel">John Doe</h2>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                    {/* On gère le menu de navigation et son contenu (hamburger pour le mobile) */}
                        <div className="offcanvas-body"> {/* attribut ms-auto permet de mettre l'élement à droite de la barre*/}
                            <ul className="navbar-nav ms-auto justify-content-end flex-grow-1 pe-3">    
                                <li className="nav-item"><Link to="/" className="nav-link text-uppercase" >Home</Link></li>
                                <li className="nav-item"><Link to="/Services" className="nav-link text-uppercase" >Services</Link></li>
                                <li className="nav-item"><Link to="/Portfolio" className="nav-link text-uppercase" >Portfolio</Link></li>
                                <li className="nav-item"><Link to="/Contact" className="nav-link text-uppercase" >Contact</Link></li>
                                <li className="nav-item"><Link to="/MentionsLegales" className="nav-link text-uppercase" >Mentions légales</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Header;