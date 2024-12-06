import React from "react";
import photo from '../../assets/style/images/john-doe-about.jpg';
import '../../assets/style/AboutHome.css'

const AboutHome = () => {
    return(
        <section className="py-5" id="about-home">
            <div className="container rounded shadow p-4 my-4"> {/* on ajoute au container principal l'effet de box shadow */}
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-start">
                        <h3 className="title">À propos</h3>
                        <img src={photo} alt="Photo John doe" className="img-fluid mb-3"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optio,
                        necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at ?
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optio,
                        necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at ?
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optio,
                        necessitatibus consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure enim placeat? Natus, neque at ?
                        </p>
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-start">
                        <h3 className="title">Mes compétences</h3>
                        <div className="mb-3">
                            <label>HTML5 90%</label>
                            <div className="progress"> {/* attribut class progress pour les barres bootstrap */}
                                <div className="progress-bar bg-danger" style={{width: "90%"}}></div> {/* bg-... pour la couleur de la bar et le style={} pour régler comment elle est remplit */}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label>CSS3 80%</label>
                            <div className="progress">
                                <div className="progress-bar bg-info" style={{width: "80%"}}></div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label>JAVASCRIPT 70%</label>
                            <div className="progress">
                                <div className="progress-bar bg-warning" style={{width: "70%"}}></div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label>PHP 60%</label>
                            <div className="progress">
                                <div className="progress-bar bg-success" style={{width: "60%"}}></div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label>REACT 50%</label>
                            <div className="progress">
                                <div className="progress-bar bg-primary" style={{width: "50%"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AboutHome;