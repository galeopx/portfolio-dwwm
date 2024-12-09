import React from "react";
import { useState, useEffect } from "react";
import '../../assets/style/ModaleHome.css';

const GithubJohnDoe = () => {
    // {/* on doit commencer par faire en sorte que la modale soit de base pas ouverte on va alors créer des variables pour gérer son état ouverte ou fermée*/}
    const [showModal, setShowModal] = useState(false);
    // {/* ici le but est de créer une variable pour récupérer les données stockées dans l'API et les mettres à jour */}
    const [profile, setProfile] = useState([]);
    
    // {/* Il faut alors récupérer les données de l'API pour ce faire on reprends à peu près la fonction des cas pratiques */}
    const fetchGithubData = async () => {
        const res = await fetch('https://api.github.com/users/github-john-doe'); //{/* On récupère les données de l'API dans la variable res */}
        const data = await res.json(); //{/* on stock les données dans la variable data */}
        setProfile(data); //{/* Maintenant on les associe au profile pour le faire changer d'état. */} //{/* ouvrir la modale une fois les données récupérées */}
    };
    useEffect(()=>{
        fetchGithubData();
    });
        return(
        <div>
            <button className="btn btn-danger" onClick={() => setShowModal(true)}>En savoir plus</button>
            {/* On doit créer une condition pour afficher le contenue seulement si le button a été cliqué.*/}
            <div className="modal show d-bloc" tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-dark text-light">
                            <div className="modal-header">
                                <h3 className="modal-title">Mon profil GitHub</h3>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body ">
                                <div className="container">
                                    <div className="row">
                                        {/* on récupère notre première donnée de l'API l'avatar */}
                                        <div className="col-md-4 col-12 text-center mb-3 mb-md-0">
                                            <img 
                                            src={profile.avatar_url} 
                                            alt="Avatar Github" 
                                            className="img-fluid mb-3"></img>
                                        </div>
                                        <div className="col-md-8 col-12 text-start">
                                            <ul className="list-unstyled mb-2">
                                                {/* on récupère le nom d'utilisateur et on fait un lien clickable sécurisé avec rel=...*/}
                                                <li className="border-bottom border-secondary-subtle mb-3 " ><i className=" bi bi-person me-1"></i><a href={profile.html_url ||'Nom non spécifiée'} target="_blank" rel="noopener noreferrer">{profile.name}</a></li>
                                                <li className="border-bottom border-secondary-subtle mb-3 "><i className=" bi bi-geo-alt me-1"></i>{profile.location || ''} </li>
                                                <li className="border-bottom border-secondary-subtle mb-3"><i className=" bi bi-card-text me-1"></i>{profile.bio || 'Pas de bio disponible'}</li>
                                                <li className="border-bottom border-secondary-subtle mb-3"><i className=" bi bi-box me-1"></i>Repositories : {profile.public_repos}</li>
                                                <li className="border-bottom border-secondary-subtle mb-3"><i className="bi bi-people me-1"></i>Followers : {profile.followers}</li>
                                                <li><i className="bi bi-people me-1"></i>Following :{profile.following}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Fermer</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GithubJohnDoe;