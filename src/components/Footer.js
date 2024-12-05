import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css'; /*On utilise comme demandé les icones de la biliothèque Bootstrap */

const Footer = () => {
    return(
        <footer className="bg-dark text-light py-4">
            <Container>
                <Row>
                    {/* Première colonne avec les contacts */}
                    <Col md={4} className="mb-3"> {/* md={4} créer pour les écrans moyens/larges 3 colonnes de 4/12. className="mb-3" créer une petite marge en bas des colonnes */}
                        <h3>John Doe</h3>
                        <p>40 rue Laure Diebold<br/>
                         69009 Lyon, France <br/>
                        10 20 30 40 50 <br/>
                        <a href="mailto:johndoe@gùail.com" className="text-light">john.doe@gmail.com</a>
                        </p>
                        <div>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                                <i className="bi bi-github" style={{fontSize:'24px'}}></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                                <i className="bi bi-linkedin" style={{fontSize:'24px'}}></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                                <i className="bi bi-twitter" style={{fontSize:'24px'}}></i>
                            </a>
                        </div>
                    </Col>
                    {/* 2ème colonne avec les liens de navigations */}
                    <Col md={4} className="mb-3">
                        <h3>Liens utiles</h3>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-light">Accueil</a></li>
                            <li><a href="/" className="text-light">Services</a></li>
                            <li><a href="/" className="text-light">Portfolio</a></li>
                            <li><a href="/" className="text-light">Me contacter</a></li>
                            <li><a href="/" className="text-light">Mentions légales</a></li>
                        </ul>
                    </Col>
                    {/* 3ème Colonne les derniers projets réalisés */}
                    <Col md={4} className="mb-3">
                        <h3>Mes dernières réalisations</h3>
                        <ul className="list-unstyled">
                            <li><a href="./pages/Portfolio.js">Fresh Food</a></li>
                            <li><a href="./pages/Portfolio.js">Restaurant Akira</a></li>
                            <li><a href="./pages/Portfolio.js">Espace bien-être</a></li>
                            <li><a href="./pages/Portfolio.js">SEO</a></li>
                            <li><a href="./pages/Portfolio.js">Création d'une API</a></li>
                            <li><a href="./pages/Portfolio.js">Maquette d'un site</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;