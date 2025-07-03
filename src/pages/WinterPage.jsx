import "./WinterPage.css";
import image1 from "../assets/heroimg4.jpg";
import image2 from "../assets/winter1.jpg";
import image3 from "../assets/winter2.jpg";
import image4 from "../assets/winter3.jpg";
import image5 from "../assets/winter4.jpg";

const WinterPage = () => {
  const pictureData = [
    { image: image1, alt: "rock" },
    { image: image2, alt: "rock" },
    { image: image3, alt: "rock" },
    { image: image4, alt: "rock" },
    { image: image5, alt: "rock" },
  ];

  return (
    <section className="winter-sec">
      <div className="winter-cont">
        <div className="win">
          <h3>Winter in Ushuaia</h3>
          <p>
            Venture to the southernmost city in the world, Ushuaia, Argentina,
            to capture the raw beauty of Patagonia in winter. Utilizing the
            Panasonic Lumix S1, seize the opportunity to photograph the dramatic
            landscapes where snow-covered mountains meet the rugged coastline.{" "}
          </p>
          <p>
            This project is a visual exploration of the untamed wilderness of
            Patagonia during the enchanting winter months.
          </p>
        </div>
        <div className="wint">
          <div>
            {[...pictureData].map((picture, index) => {
              return (
                <div key={index} className="winter">
                  <img src={picture.image} alt={picture.alt} />
                </div>
              );
            })}
          </div>

          <div className="about-winter">
            <div>
              <h2>Location:</h2>
              <p>Ushuaia, Argentina</p>
            </div>
            <div>
              <h2>Date:</h2>
              <p>Dec 19, 2021</p>
            </div>
            <div>
              <h2>Camera:</h2>
              <p>Panasonic Lumix S1 Mirrorless</p>
            </div>
            <div>
              <h2>Lens:</h2>
              <p>Lumix S Pro 24-70mm f/2.8</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinterPage;
