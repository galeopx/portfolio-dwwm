import React from "react";
import "../assets/style/MentionsLegales.css"
import { Helmet } from "react-helmet"; //Permet de manipuler le contenu <Head> du HTML et ainsi de ne pas indexer cette page

const MentionsLegales = () => {
    return(
    <div className="container mt-5 mb-5">
        <Helmet>
            <meta name="robots" content="noindex, nofollow"/>
        </Helmet>
        <h1 className="text-center fw-bold mb-3">Mentions légales</h1>
        <div className="blue-line mb-5"></div>
        <div className="accordion" id="mentionslegales">
            {/* Start with the first element: Editeur du site */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="editorTitle">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEditor" aria-expanded="true" aria-controls="collapseEditor">
                        Editeur du site
                    </button>
                </h2>
                <div id="collapseEditor" className="accordion-collapse show" aria-labelledby="editorTitle"data-bs-parent="#mentionslegales" >
                    <div className="accordion-body">
                        <h3 className="h4">John Doe</h3>
                        <p className="mb-0"><i class="bi bi-map"></i> 40 rue Laure Diebold</p>
                        <p className="mb-0"><i class="bi bi-geo-alt"></i> 69009 Lyon, France</p>
                        <p className="mb-0"><i class="bi bi-phone"></i> 10 20 30 40 50</p>
                        <p><i class="bi bi-envelope-at"></i> john.doe@gmail.com</p>
                    </div>
                </div>
            </div>
            {/* The second element about host */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="hostTitle">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"data-bs-target="#collapseHost"aria-expanded="false"aria-controls="collapseHost">
                    Hébergeur
                    </button>
                </h2>
                <div id="collapseHost" className="accordion-collapse collapse" aria-labelledby="hostTitle"data-bs-parent="#mentionslegales" >
                    <div className="accordion-body">
                        <h3 className="fw-bold">alwaysdata</h3>
                        <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris </p>
                        <p><i class="bi bi-globe me-1"></i><a href="www.alwaysdata.com"target="_blank" rel="noonpener noreferrer">www.alwaysdata.com</a></p>
                    </div>
                </div>
            </div>
            {/* The third element about credits */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="creditsTitle">
                    <button className="accordion-button collapsed"type="button"data-bs-toggle="collapse"data-bs-target="#collapseCredits"aria-expanded="false"aria-controls="collapseCredits">
                    Crédits
                    </button>
                </h2>
                <div id="collapseCredits"className="accordion-collapse collapse"aria-labelledby="creditsTitle"data-bs-parent="#mentionslegales">
                    <div className="accordion-body">
                        <h3 className="fw-bold">Crédits</h3>
                        <p>Ce site a été réalisé par John Doe, étudiant au <span className="text-decoration-underline text-primary">Centre Européen de Formation</span></p>
                        <p className="fst-italic">Les images utilisées sur ce site proviennent de 
                            <a href="https://pixabay.com" target="_blank" rel="noonpener noreferrer"> Pixabay</a>
                        </p>
                        <p className="fst-italic">Le favicon de ce site a été fournie par 
                            <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank" rel="noonpener noreferrer"> John doe Icons erstellt von Freepik - Flaticon</a>
                        </p>
                    </div>
                </div>
            </div>     
        </div>
    </div>
        
    );
}
export default MentionsLegales;