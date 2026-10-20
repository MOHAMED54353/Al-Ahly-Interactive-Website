import React from "react";
import "../Style/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Alahly SC</h1>
        <p className="hero-description">
          African Club of the Century 🦅
          <br />
          The Greatest Club in History
          <br />
          <span className="hero-subtitle">
            Founded in 1907 • 42 League Titles • 12 CAF Champions League
          </span>
        </p>
        <button className="hero-btn">Learn More</button>
      </div>

      <div className="hero-image">
        <img src="نسر.png" alt="Al Ahly Eagle" />
      </div>
    </section>
  );
};

export default Hero;
