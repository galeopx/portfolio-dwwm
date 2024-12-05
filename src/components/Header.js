import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';

export default function Header(){
    return(
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#">JOHN DOE</Navbar.Brand>
                    {/* On ajoute le menu hamburger de bootstrap pour le mobile, il ne s'affiche pas dans les autres versions */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    {/* On gère le menu de navigation et son contenu (hamburger pour le mobile) */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto" > {/* attribut ms-auto permet de mettre l'élement à droite de la barre*/}
                            <Nav.Link href="" className="nav-link" >HOME</Nav.Link>
                            <Nav.Link href="" className="nav-link">SERVICE</Nav.Link>
                            <Nav.Link href="" className="nav-link">PORTFOLIO</Nav.Link>
                            <Nav.Link href="" className="nav-link">CONTACT</Nav.Link>
                            <Nav.Link href="" className="nav-link">MENTION LEGALES</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}