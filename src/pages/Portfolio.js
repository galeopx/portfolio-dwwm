import React from "react";
import FreshFood from "../assets/style/images/portfolio/fresh-food.jpg"
import Akira from "../assets/style/images/portfolio/restaurant-japonais.jpg"
import Relax from "../assets/style/images/portfolio/espace-bien-etre.jpg"
import Seo from "../assets/style/images/portfolio/seo.jpg"
import API from "../assets/style/images/portfolio/coder.jpg"
import Maquette from "../assets/style/images/portfolio/screens.jpg"
import imgHead from "../assets/style/images/banner.jpg"
import '../assets/style/Portfolio.css'

const Portfolio = () => {
    // On va faire comme avec la page service, on va créer un object pour rendre dynamique les cards.
    const projets = [
        {
            titre: "Fresh Food",
            description: "Site de vente de produits frais en ligne",
            outils: "Site réalisé avec PHP et MySql",
            image: FreshFood,
            link: "#"
        },
        {
            titre: "Restaurant Akira",
            description: "Site de vente de produits frais en ligne",
            outils: "Site réalisé avec WordPress",
            image: Akira,
            link: "#"
        },
        {
            titre: "Espace bien-être",
            description: "Site de vente de produits en ligne",
            outils: "Site réalisé avec LARAVEL",
            image: Relax,
            link: "#"
        },
        {
            titre: "SEO",
            description: "Amélioration du référencement d'un site e-commerce",
            outils: "Utilisation des outils SEO",
            image: Seo,
            link: "#"
        },
        {
            titre: "Création d'un API",
            description: "Création d'une API RESTFULL publique",
            outils: "PHP - SYMFONY",
            image: API,
            link: "#"
        },
        {
            titre: "Maquette d'un site web",
            description: "Création d'un prototype d'un site",
            outils: "Réalisé avec FIGMA",
            image: Maquette,
            link: "#"
        },

    ]
    return(
        <section>
            <img src={imgHead} alt="banner" className="img-fluid"></img>
            <div className="portfolio-content py-5">
                <div className="container">
                    <h1 className="text-center mb-2 h1 fw-bold ">Portfolio</h1>
                    <p className="text-center">Voici quelques-unes de mes réalisations</p>
                    <div className="blue-line mb-5"></div>
                    <div className="row">
                        {projets.map((projet,index) =>(
                            <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                                <div className="card projet-card">
                                    <img src={projet.image} alt={projet.titre} className="card-img-top"></img>
                                    <div className="card-body text-center">
                                        <h2 className="card-title fw-bold fs-4 fs-md-4 fs-lg-2 fw-bold">{projet.titre}</h2>
                                        <p className="card-text ">{projet.description}</p>
                                        <a href={projet.link} className="btn btn-primary btn-sm">Voir le site</a>
                                    </div>
                                    <div className="card-footer text-center">
                                        <small className="text-body-secondary">{projet.outils}</small>
                                        </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Portfolio;