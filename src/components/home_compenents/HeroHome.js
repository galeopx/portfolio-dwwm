import React from "react";
import backgroundImage from "../../assets/style/images/hero-bg.jpg";
import GithubJohnDoe from "./ModaleHome";



const HeroHome = () => {
    return(
        <section id="section_hero" className="text-white d-flex align-items-center justify-content-center"
        style={{
            backgroundImage: `url(${backgroundImage})` ,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: '100vh',
        }}>
            <div className="text-center">
                <h1 className="display-4" id="h1__home">Bonjour, je suis John Doe</h1>
                <h2 className="mb-4" id="h2__home">Développeur web full stack</h2>
                <GithubJohnDoe/>
            </div>
        </section>
    );
};
export default HeroHome;