import React from "react";
import "../Style/About.css";

const About = () => {
  const trophies = [
    {
      id: 1,
      title: "Egyptian Premier League",
      count: 42,
      icon: "🏆",
      image:
        "https://cdn.al-ain.com/images/2023/7/10/100-005536-egyptian-league-2023-2024-new-shield-1948_700x400.jpg",
      description: "Most successful club in Egyptian football history",
    },
    {
      id: 2,
      title: "CAF Champions League",
      count: 12,
      icon: "⭐",
      image:
        "https://cdn.eremnews.com/media/f4073870-c441-465b-a4eb-a022e0231386",
      description: "Record holder for African Champions League titles",
    },
    {
      id: 3,
      title: "Egypt Cup",
      count: 38,
      icon: "🥇",
      image: "https://images.akhbarelyom.com/UP/20250605175613478.jpg",
      description: "Dominating the domestic cup competition",
    },
    {
      id: 4,
      title: "CAF Super Cup",
      count: 8,
      icon: "🌟",
      image: "https://www.cafonline.com/media/wxoksgkg/b24i1wm0477.jpg",
      description: "African Super Cup Championships",
    },
    {
      id: 5,
      title: "Egyptian Super Cup",
      count: 13,
      icon: "💎",
      image:
        "https://www.winwin.com/sites/default/files/styles/medium_640x360/public/2024-09/EGY%20Super%20Cup.jpg?h=a66c5756&itok=8qPl0d-y",
      description: "Egyptian Super Cup winner",
    },
    {
      id: 6,
      title: "CAF Confederation Cup",
      count: 1,
      icon: "🎖️",
      image:
        "https://qa.cafonline.com/media/0qgbnpk2/caf-confederation-cup-trophy.jpg",
      description: "Continental cup competition winner",
    },
  ];

  const stats = [
    { number: "150+", label: "Total Trophies", icon: "🏆" },
    { number: "1907", label: "Founded", icon: "📅" },
    { number: "80M+", label: "Fans Worldwide", icon: "❤️" },
    { number: "#1", label: "In Africa", icon: "🌍" },
  ];

  const achievements = [
    "African Club of the Century (CAF)",
    "Most successful club in Egypt",
    "Record CAF Champions League titles",
    "FIFA Club World Cup bronze medalists",
    "Most decorated club in African football",
  ];

  return (
    <section className="about" id="about">
      {/* About Hero */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-title">About Al Ahly SC</h1>
          <p className="about-subtitle">
            The Red Devils • Est. 1907 • Cairo, Egypt
          </p>
        </div>
      </div>

      {/* Club Info */}
      <div className="about-container">
        <div className="club-info">
          <div className="info-card">
            <h2 className="section-title">Our Legacy</h2>
            <p className="info-text">
              Al Ahly Sporting Club, founded in 1907, stands as the most
              successful football club in Africa and one of the most decorated
              clubs globally. Known as "The Red Devils," Al Ahly has been a
              symbol of excellence, passion, and unwavering dedication to the
              beautiful game.
            </p>
            <p className="info-text">
              With a rich history spanning over a century, Al Ahly has
              consistently dominated both Egyptian and African football, earning
              the prestigious title of "African Club of the 20th Century" by
              CAF.
            </p>
          </div>

          <div className="info-card achievements-card">
            <h2 className="section-title">Key Achievements</h2>
            <ul className="achievements-list">
              {achievements.map((achievement, index) => (
                <li key={index} className="achievement-item">
                  <span className="check-icon">✓</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-icon">{stat.icon}</span>
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trophies Section */}
        <div className="trophies-section">
          <h2 className="section-title-main">Our Trophies Cabinet</h2>
          <p className="section-description">
            A legacy built on success, excellence, and unforgettable moments
          </p>

          <div className="trophies-grid">
            {trophies.map((trophy) => (
              <div key={trophy.id} className="trophy-card">
                <div className="trophy-image-wrapper">
                  <img
                    src={trophy.image}
                    alt={trophy.title}
                    className="trophy-image"
                  />
                  <div className="trophy-overlay">
                    <span className="trophy-icon-large">{trophy.icon}</span>
                  </div>
                </div>

                <div className="trophy-content">
                  <h3 className="trophy-title">{trophy.title}</h3>
                  <div className="trophy-count">
                    <span className="count-number">{trophy.count}</span>
                    <span className="count-text">Titles</span>
                  </div>
                  <p className="trophy-description">{trophy.description}</p>
                </div>

                <div className="trophy-shine"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="quote-section">
          <div className="quote-card">
            <span className="quote-icon">"</span>
            <p className="quote-text">
              Al Ahly is not just a club, it's a way of life. It represents the
              pride, passion, and glory of Egyptian and African football.
            </p>
            <div className="quote-author">
              <div className="author-line"></div>
              <span>The Red Castle Legacy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
