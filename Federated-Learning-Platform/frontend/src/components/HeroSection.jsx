import React from "react";
import { NavLink } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="hero-container">
        <div className="container">
            <div className="hero-content">
                <h1>
                Empowering <span>Federated Learning</span>
                </h1>
                <p>
                Securely train AI models across multiple organizations — preserving
                privacy, enabling collaboration, and accelerating innovation.
                </p>
                {/* <button className="hero-btn">Get Started</button> */}
                <h2>
                Optimize, Outperform
                </h2>
                <div className="nav-button-hero">
                    <NavLink to="/signup" className="get-started-btn">
                        Get Started
                    </NavLink>
                </div>
                <div className="scroll-down">
                    <span></span><div>Scroll Down</div>
                    
                </div>
            </div>

            <div className="hero-images">
                <div className="img-container">
                    <img src="/hero.png" alt="Federated Node" className="img1" />
                </div>
            </div>
        </div>
      
    </section>
  );
};

export default HeroSection;
