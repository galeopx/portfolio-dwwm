import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../pages/Home";

const Header = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark position-sticky bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-light text-uppercase" href={<Home/>}>John Doe</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* On ajoute le menu hamburger de bootstrap pour le mobile, il ne s'affiche pas dans les autres versions */}
                    <div className="offcanvas offcanvas-top text-bg-dark" tabIndex='-1' id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header mb-0">
                            <h2 className="offcanvas-title text-uppercase h5" id="offcanvasDarkNavbarLabel">John Doe</h2>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                    {/* On gère le menu de navigation et son contenu (hamburger pour le mobile) */}
                        <div className="offcanvas-body pt-0"> {/* attribut ms-auto permet de mettre l'élement à droite de la barre*/}
                            <ul className="navbar-nav nav ms-auto justify-content-end flex-grow-1 pe-3">    
                                <li className="nav-item"> <NavLink to="/" className="nav-link text-uppercase">Home</NavLink></li>
                                <li className="nav-item"><NavLink to="/Services" className="nav-link text-uppercase" >Services</NavLink></li>
                                <li className="nav-item"><NavLink to="/Portfolio" className="nav-link text-uppercase" >Portfolio</NavLink></li>
                                <li className="nav-item"><NavLink to="/Contact" className="nav-link text-uppercase" >Contact</NavLink></li>
                                <li className="nav-item"><NavLink to="/MentionsLegales" className="nav-link text-uppercase" >Mentions légales</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Header;