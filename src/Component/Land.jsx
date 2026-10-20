import React, { useState } from "react";
import "../Style/Land.css";

const Legends = () => {
  const [selectedLegend, setSelectedLegend] = useState(null);

  const legends = [
    {
      id: 1,
      name: "Mahmoud El Khatib",
      nameAr: "محمود الخطيب",
      title: "The Prince",
      titleAr: "الأمير",
      description:
        "Al Ahly's legend and symbol since the 1970s. Led the team to countless victories and became club president.",
      descriptionAr:
        "أسطورة الأهلي ورمز النادي منذ السبعينات. قاد الفريق لانتصارات لا حصر لها وأصبح رئيس النادي.",
      image:
        "https://static.srpcdigital.com/styles/1037xauto/public/2025-10/1218598.jpeg.webp",
      years: "1967-1988",
      position: "Forward",
      achievements: "6 League Titles, 7 Egyptian Cups",
    },
    {
      id: 2,
      name: "Mohamed Aboutrika",
      nameAr: "محمد أبو تريكة",
      title: "Magician",
      titleAr: "الساحر",
      description:
        "The century's star and holder of the best player title. Icon of Egyptian and African football.",
      descriptionAr:
        "نجم القرن وحامل لقب أفضل لاعب. أيقونة الكرة المصرية والأفريقية.",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=640,fit=crop,trim=1.9683098591549297;0;777.4823943661971;0/ALpO5RNx68CjKpRL/61a5d2e7-19be-4c53-b4c9-6814f83eeb2e-dWxBB22W07TwWZBW.jpg",
      years: "2004-2013",
      position: "Attacking Midfielder",
      achievements: "8 League Titles, 4 CAF Champions League",
    },
    {
      id: 3,
      name: "Hossam Hassan",
      nameAr: "حسام حسن",
      title: "The Legend",
      titleAr: "الأسطورة",
      description:
        "Historical top scorer and championship maker. One of Africa's greatest strikers.",
      descriptionAr:
        "الهداف التاريخي وصانع البطولات. واحد من أعظم المهاجمين في أفريقيا.",
      image:
        "https://images.akhbarelyom.com/images/images/large/6201724203342.jpg",
      years: "1993-2000",
      position: "Striker",
      achievements: "4 League Titles, 2 CAF Champions League",
    },
    {
      id: 4,
      name: "Ahmed Hassan",
      nameAr: "أحمد حسن",
      title: "The Captain",
      titleAr: "القائد",
      description:
        "Team captain with the most international appearances. A true leader on and off the field.",
      descriptionAr:
        "قائد الفريق الأكثر مشاركة دوليًا. قائد حقيقي داخل وخارج الملعب.",
      image:
        "https://www.almjhar.com/PubFiles/NewsFiles/5969/image_5969_ar.jpg?width=359&height=270&crop=auto",
      years: "2006-2011",
      position: "Midfielder",
      achievements: "5 League Titles, 3 CAF Champions League",
    },
    {
      id: 5,
      name: "Mohamed Barakat",
      nameAr: "محمد بركات",
      title: "The Maestro",
      titleAr: "المايسترو",
      description:
        "The midfield genius who orchestrated Al Ahly's golden era with exceptional vision.",
      descriptionAr:
        "عبقري الوسط الذي نظم العصر الذهبي للأهلي برؤية استثنائية.",
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=640,fit=crop/ALpO5RNx68CjKpRL/barakat-AQE4qgWoO8tzrKg9.jpg",
      years: "1999-2012",
      position: "Midfielder",
      achievements: "7 League Titles, 4 CAF Champions League",
    },
    {
      id: 6,
      name: "Emad Moteab",
      nameAr: "عماد متعب",
      title: "The Sniper",
      titleAr: "القناص",
      description:
        "Prolific goalscorer and Al Ahly's loyal son. Known for crucial goals in decisive moments.",
      descriptionAr:
        "الهداف الماهر وابن الأهلي البار. معروف بأهدافه الحاسمة في اللحظات الفارقة.",
      image:
        "https://www.shorouknews.com/uploadedimages/Partners/original/%D8%B9%D9%85%D8%A7%D8%AF%20%D9%85%D8%AA%D8%B9%D8%A8%20%D9%84%D9%88%20%D9%83%D9%86%D8%AA%20%D8%A7%D9%85%D8%B1%D8%A3%D8%A9%20%D8%B3%D8%A3%D8%AA%D8%B2%D9%88%D8%AC%20%D9%87%D8%B0%D8%A7%20%D8%A7%D9%84%D9%84%D8%A7%D8%B9%D8%A8..%20%D8%B4%D8%A7%D9%87%D8%AF%20%D8%A7%D9%84%D9%81%D9%8A%D8%AF%D9%8A%D9%88-dab6bc7f-bb48-4438-b8bc-803465652b27.jpg",
      years: "2003-2016",
      position: "Forward",
      achievements: "8 League Titles, 5 CAF Champions League",
    },
  ];

  return (
    <section className="legends-section" id="legends">
      {/* Hero Section */}
      <div className="legends-hero">
        <div className="legends-hero-overlay"></div>
        <div className="legends-hero-content">
          <h1 className="legends-main-title">
            About Al Ahly SC
            <span className="title-underline"></span>
          </h1>
          <p className="legends-subtitle">
            History, Achievements & Legends of Every Era
          </p>
        </div>
      </div>

      {/* History Section */}
      <div className="legends-container">
        <div className="history-section">
          <div className="history-content">
            <div className="history-icon">🏆</div>
            <h2 className="history-title">A Legacy Since 1907</h2>
            <p className="history-text">
              Founded in 1907, Al Ahly Sporting Club stands as a symbol of rich
              history and sporting success in Egypt and Africa. Over more than a
              century, the club has achieved unprecedented success, earning the
              title of "African Club of the 20th Century" by CAF.
            </p>
            <p className="history-text">
              Throughout its glorious journey, many players have emerged as
              legends, leaving an unforgettable mark on Egyptian football
              history. These icons have inspired generations and continue to be
              role models for aspiring footballers across the continent.
            </p>

            <div className="history-stats">
              <div className="history-stat">
                <span className="stat-emoji">🏆</span>
                <h3>150+</h3>
                <p>Total Trophies</p>
              </div>
              <div className="history-stat">
                <span className="stat-emoji">⭐</span>
                <h3>12</h3>
                <p>CAF Champions</p>
              </div>
              <div className="history-stat">
                <span className="stat-emoji">🥇</span>
                <h3>42</h3>
                <p>League Titles</p>
              </div>
              <div className="history-stat">
                <span className="stat-emoji">🌍</span>
                <h3>#1</h3>
                <p>In Africa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legends Grid */}
        <div className="legends-grid-section">
          <h2 className="section-title-legends">Our Legends</h2>
          <p className="section-subtitle-legends">
            The icons who made history wearing the Red Devils jersey
          </p>

          <div id="legends" className="legends-grid">
            {legends.map((legend, index) => (
              <div
                key={legend.id}
                className="legend-card"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedLegend(legend)}
              >
                <div className="legend-image-wrapper">
                  <img
                    src={legend.image}
                    alt={legend.name}
                    className="legend-image"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x500?text=Legend";
                    }}
                  />
                  <div className="legend-overlay">
                    <div className="legend-overlay-content">
                      <span className="legend-title-badge">{legend.title}</span>
                      <p className="legend-years">{legend.years}</p>
                      <p className="legend-position">{legend.position}</p>
                      <button className="view-details-btn">View Details</button>
                    </div>
                  </div>
                  <div className="legend-glow"></div>
                </div>

                <div className="legend-info">
                  <h3 className="legend-name">{legend.name}</h3>
                  <p className="legend-name-ar">{legend.nameAr}</p>
                  <div className="legend-divider"></div>
                  <p className="legend-description">{legend.description}</p>
                  <div className="legend-achievements">
                    <span className="achievement-icon">🏆</span>
                    <p>{legend.achievements}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="legends-quote">
          <div className="quote-container">
            <span className="quote-mark">"</span>
            <p className="quote-text">
              These legends didn't just play for Al Ahly, they embodied its
              spirit, carried its banner high, and wrote golden chapters in the
              history of African football.
            </p>
            <div className="quote-footer">
              <div className="footer-line"></div>
              <span className="quote-author">The Red Castle Heritage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Legend Details */}
      {selectedLegend && (
        <div className="legend-modal" onClick={() => setSelectedLegend(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedLegend(null)}
            >
              ×
            </button>
            <div className="modal-grid">
              <img
                src={selectedLegend.image}
                alt={selectedLegend.name}
                className="modal-image"
              />
              <div className="modal-info">
                <h2>{selectedLegend.name}</h2>
                <h3>{selectedLegend.nameAr}</h3>
                <span className="modal-title">
                  {selectedLegend.title} • {selectedLegend.titleAr}
                </span>
                <div className="modal-details">
                  <p>
                    <strong>Years:</strong> {selectedLegend.years}
                  </p>
                  <p>
                    <strong>Position:</strong> {selectedLegend.position}
                  </p>
                  <p>
                    <strong>Achievements:</strong> {selectedLegend.achievements}
                  </p>
                </div>
                <p className="modal-description">
                  {selectedLegend.description}
                </p>
                <p className="modal-description-ar">
                  {selectedLegend.descriptionAr}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Legends;
