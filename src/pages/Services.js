import React from "react";
import '../assets/style/Services.css';
const Services = () => {
    const services = [
        {
            icon: "bi bi-brush",
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
        <section className="services-section container my-5">
            <h2 className="text-center">Mon offre de services</h2>
            <p className="text-center">
                Voici les prestation sur lesquelles je peux intervenir
            </p>

        </section>
    );
}
export default Services;