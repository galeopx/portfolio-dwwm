import React from "react";
import '../assets/style/Services.css';
import imgHead from "../assets/style/images/banner.jpg"
const Services = () => {
    // Création d'un objet dynamique service avec ce que contiendront chacune des cards
    const services = [
        {
            icon: "bi bi-brush",    //Icone bootstrap
            title: "UX Design",
            description: "L'UX Design consiste à concevoir des produits en plaçant l'utilisateur au centre des préoccupations pour une expérience optimale.",
        },
        {
            icon: "bi bi-code-slash",
            title: "Développement Web",
            description: "Le développement de sites consiste à utiliser des langages de programmation (HTML, CSS, JavaScript, etc.) et des frameworks.",
        },
        {
            icon: "bi bi-search",
            title: "Réferencement",
            description:  "Le référencement naturel (SEO) optimise un site web pour le faire remonter dans les résultats des moteurs de recherche.",
        },
    ];
    return(
        <section>
            <img src={imgHead} alt="banner" className="img-fluid"></img>
            <div className="services-section container my-5">
                <h2 className="text-center">Mon offre de services</h2>
                <p className="text-center">
                    Voici les prestation sur lesquelles je peux intervenir
                </p>
                <div className="blue-line"></div> {/* création de la ligne bleue de séparation */}
                <div className="row mt-4">
                    {/* .map pour afficher les données de l'object service dans chaque card */}
                    {services.map((service, index) => (
                        <div className="col-md-4 mb-3" key={index} >
                            <div className="card service-card text-center p-3">
                                <div className="service-icon"><i className={service.icon}></i></div> {/* On charge les icones bootstrap dynamiquement */}
                                <h3 className="h5 card-title mt-3">{service.title}</h3>
                                <p className="card-text">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Services;