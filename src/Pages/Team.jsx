import React, { useState } from "react";
import "../Style/Team.css";

const players = [
  {
    id: 1,
    name: "Mohamed El-Shenawy",
    position: "Goalkeeper",
    number: 16,
    nationality: "🇪🇬 Egypt",
    img: "https://media.gettyimages.com/id/2219498728/photo/miami-florida-mohamed-el-shenawy-of-al-ahly-poses-for-a-portrait-during-the-official-fifa.jpg?s=612x612&w=gi&k=20&c=5rEPQlHNMO2dGxfKl-XZckE60zlai-E3on1zTWVBfJQ=",
  },
  {
    id: 2,
    name: "Ali Maaloul",
    position: "Left Back",
    number: 3,
    nationality: "🇹🇳 Tunisia",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWAMOWr9EDJJiUoH6Gf_Z6cSlSEK-XEEW4g&s",
  },
  {
    id: 3,
    name: "Yasser Ibrahim",
    position: "Center Back",
    number: 6,
    nationality: "🇪🇬 Egypt",
    img: "https://imgs.ysscores.com/player/cover/7831749785706.png",
  },
  {
    id: 4,
    name: "Yassem Marai",
    position: "Center Back",
    number: 4,
    nationality: "🇪🇬 Egypt",
    img: "https://el-ahly.com/images/news/208017-207775-mor.jpg",
  },
  {
    id: 5,
    name: "Mohamed Hani",
    position: "Right Back",
    number: 3,
    nationality: "🇪🇬 Egypt",
    img: "https://koraplus.com/images/2024/5/large/164414004210420240524065306536.jpg",
  },
  {
    id: 6,
    name: "Aliou Dieng",
    position: "Midfielder",
    number: 6,
    nationality: "🇲🇱 Mali",
    img: "https://pbs.twimg.com/profile_images/1948899517148876800/F4ahGXoP_400x400.jpg",
  },
  {
    id: 7,
    name: "Marawan Atia",
    position: "Midfielder",
    number: 14,
    nationality: "🇪🇬 Egypt",
    img: "https://i2.wp.com/see.news/images/2023/01/-1673426807-0.jpg?resize=920%2C550&ssl=1",
  },
  {
    id: 8,
    name: "Emam Ashour",
    position: "Midfielder",
    number: 22,
    nationality: "🇪🇬 Egypt",
    img: "https://www.onzedafrik.com/wp-content/uploads/2024/09/IMG_9992-810x580.jpeg",
  },
  {
    id: 9,
    name: "Bencharqi",
    position: "Forward",
    number: 12,
    nationality: "🇲🇦 Morocco",
    img: "https://misrconnect.com/storage/news-posts/December2025/JwC0keOtrdNJzoEnz55I.jpg",
  },
  {
    id: 10,
    name: "Zizo",
    position: "Right Midfielder",
    number: 21,
    nationality: "🇪🇬 Egypt",
    img: "https://media.gettyimages.com/id/2219497938/photo/miami-florida-ahmed-sayed-zizo-of-al-ahly-poses-for-a-portrait-during-the-official-fifa-club.jpg?s=612x612&w=gi&k=20&c=kaLOhaQ_egzrPWyNH-J1pyeNS8n8A4h3U-qQAO6JELE=",
  },
  {
    id: 11,
    name: "Trezeguet",
    position: "Left Midfielder",
    number: 7,
    nationality: "🇪🇬 Egypt",
    img: "https://imgs.ysscores.com/player/cover/3371749787724.png",
  },
  {
    id: 12,
    name: "Mohamed Sherif",
    position: "Forward",
    number: 9,
    nationality: "🇪🇬 Egypt",
    img: "https://www.shutterstock.com/editorial/image-editorial/McT9M2x8MaD3Q605MDU2Mzg=/al-ahly-player-mohamed-sherif-celebrates-scoring-440nw-12992313b.jpg",
  },
];

const Team = () => {
  const [selectedPosition, setSelectedPosition] = useState("All");

  const positions = ["All", "Goalkeeper", "Defender", "Midfielder", "Forward"];

  const getPositionCategory = (position) => {
    if (position.includes("Back")) return "Defender";
    if (position.includes("Midfielder")) return "Midfielder";
    if (position === "Goalkeeper") return "Goalkeeper";
    return "Forward";
  };

  const filteredPlayers =
    selectedPosition === "All"
      ? players
      : players.filter(
          (player) => getPositionCategory(player.position) === selectedPosition
        );

  return (
    <section className="team-page" id="team">
      <div className="team-hero">
        <div className="team-hero-content">
          <h1 className="team-title">Meet Our Champions</h1>
          <p className="team-subtitle">
            The warriors who wear the Red Devils jersey with pride
          </p>
        </div>
      </div>

      <div className="team-stats">
        <div className="stat-box">
          <span className="stat-icon">👥</span>
          <h3 className="stat-value">{players.length}</h3>
          <p className="stat-label">Players</p>
        </div>
        <div className="stat-box">
          <span className="stat-icon">🌍</span>
          <h3 className="stat-value">5</h3>
          <p className="stat-label">Nationalities</p>
        </div>
        <div className="stat-box">
          <span className="stat-icon">⚽</span>
          <h3 className="stat-value">2024/25</h3>
          <p className="stat-label">Season</p>
        </div>
        <div className="stat-box">
          <span className="stat-icon">🏆</span>
          <h3 className="stat-value">Champions</h3>
          <p className="stat-label">Mentality</p>
        </div>
      </div>

      <div className="filter-section">
        <h2 className="filter-title">Filter by Position</h2>
        <div className="filter-buttons">
          {positions.map((position) => (
            <button
              key={position}
              className={`filter-btn ${
                selectedPosition === position ? "active" : ""
              }`}
              onClick={() => setSelectedPosition(position)}
            >
              {position}
            </button>
          ))}
        </div>
      </div>

      <div className="team-container">
        <div className="players-grid">
          {filteredPlayers.map((player, index) => (
            <div
              className="player-card"
              key={player.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="player-image-wrapper">
                <div className="player-number">{player.number}</div>
                <img
                  src={player.img}
                  alt={player.name}
                  className="player-image"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x500?text=Player";
                  }}
                />
                <div className="player-overlay">
                  <div className="overlay-content">
                    <span className="view-icon">👁️</span>
                    <p>View Profile</p>
                  </div>
                </div>
              </div>

              <div className="player-info">
                <h3 className="player-name">{player.name}</h3>
                <p className="player-position">{player.position}</p>
                <div className="player-details">
                  <span className="player-nationality">
                    {player.nationality}
                  </span>
                  <span className="player-shirt">#{player.number}</span>
                </div>
              </div>

              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Coach Section */}
      <div className="coach-section">
        <div className="coach-card">
          <div className="coach-image-wrapper">
            <img
              src="https://cdn.korabia.net/images/full/2025/%D8%AB%D8%B1%D9%88%D8%A81759867178.jpg"
              alt="Head Coach"
              className="coach-image"
            />
          </div>
          <div className="coach-info">
            <span className="coach-badge">HEAD COACH</span>
            <h2 className="coach-name">Jess Thorub</h2>
            <p className="coach-description">
              Leading Al Ahly with tactical brilliance and championship
              mentality. Under his guidance, the Red Devils continue their
              dominance in African football.
            </p>
            <div className="coach-stats-grid">
              <div className="coach-stat">
                <h4>2+</h4>
                <p>Trophies</p>
              </div>
              <div className="coach-stat">
                <h4>2025</h4>
                <p>Appointed</p>
              </div>
              <div className="coach-stat">
                <h4>85%</h4>
                <p>Win Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
