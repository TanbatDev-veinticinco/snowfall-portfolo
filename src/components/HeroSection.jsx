import "./HeroSection.css";
import { NavLink } from "react-router-dom";
import image1 from "../assets/heroimg1.jpg";
import image2 from "../assets/heroimg2.jpg";
import image3 from "../assets/heroimg3.jpg";
import image4 from "../assets/heroimg4.jpg";
import image5 from "../assets/heroimg5.jpg";

const HeroSection = () => {
  const imageData = [
    {
      img: image1,
      overlay: "View →",
      title: "Alpine Adventures in Innsbruck",
      country: "Innsbruck, Austria",
    },
    {
      img: image2,
      overlay: "View →",
      title: "Northern Lights Over Lapland",
      country: "Bali, Indonesia",
    },
    {
      img: image3,
      overlay: "View →",
      title: "Rockies Winter Wonderland",
      country: "Banff, Canada",
    },
    {
      img: image4,
      overlay: "View →",
      title: "Winter in Ushuaia",
      country: "Ushuaia, Argentina",
    },
    {
      img: image5,
      overlay: "View →",
      title: "Serenity in Niseko",
      country: "Niseko, Japan",
    },
  ];

  return (
    <div className="hero-section">
      <div className="deck">
        <div className="up-text">
          <p>Available for work</p>
          <a href="#" className="okie">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "okie")}
            >
              Reach Out →
            </NavLink>
          </a>
        </div>
      </div>
      {imageData.map((item, index) => {
        let to = `/destination/${item.title
          .toLowerCase()
          .replace(/\s+/g, "-")}`;
        if (item.title === "Alpine Adventures in Innsbruck") {
          to = "/alpinePage";
        } else if (item.title === "Northern Lights Over Lapland") {
          to = "/northernPAge";
        } else if (item.title === "Rockies Winter Wonderland") {
          to = "/rockiesPAge";
        } else if (item.title === "Winter in Ushuaia") {
          to = "/winterPAge";
        } else if (item.title === "Serenity in Niseko") {
          to = "/serenityPage";
        } 
        return (
          <div key={index} className="card">
            <NavLink to={to} className="card">
              <div className="card-img">
                <img src={item.img} alt={item.title} />
                <div className="middle">
                  <p className="text">{item.overlay}</p>
                </div>
              </div>
            </NavLink>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.country}</p>
              <NavLink to={to} className="ali">
                <p className="ali">View →</p>
              </NavLink>
            </div>
          </div>
        );
      })}
      <div className="write">
        <p>© Copyright 2025</p>
        <p>Designed by Tanbat Dev</p>
      </div>
    </div>
  );
};

export default HeroSection;
