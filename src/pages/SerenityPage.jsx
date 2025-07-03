import "./SerenityPage.css";
import image1 from "../assets/heroimg5.jpg";
import image2 from "../assets/contactpic2.jpg";
import image3 from "../assets/alpine3.jpg";
import image4 from "../assets/alpine4.jpg";
import image5 from "../assets/alpine5.jpg";

const SerenityPage = () => {
  const pictureData = [
    { image: image1, alt: "rock" },
    { image: image2, alt: "rock" },
    { image: image3, alt: "rock" },
    { image: image4, alt: "rock" },
    { image: image5, alt: "rock" },
  ];

  return (
    <section className="serenity-sec">
      <div className="serenity-cont">
        <div className="ser">
          <h3>Serenity in Niseko</h3>
          <p>
            Discover the serene winter landscapes of Niseko, Japan, capturing
            the tranquility of snow-covered forests and charming villages.
            Employing the Canon EOS 5D Mark IV, document the unique blend of
            Japanese culture and natural beauty.{" "}
          </p>
          <p>
            This project invites you to explore the elegance of winter in
            Niseko, highlighting the interplay between traditional scenes and
            the purity of snow.
          </p>
        </div>
        <div className="serenity">
          <div>
            {[...pictureData].map((picture, index) => {
              return (
                <div key={index} className="seren">
                  <img src={picture.image} alt={picture.alt} />
                </div>
              );
            })}
          </div>

          <div className="about-serenity">
            <div>
              <h2>Location:</h2>
              <p>Niseko, Japan</p>
            </div>
            <div>
              <h2>Date:</h2>
              <p>Dec 10, 2020</p>
            </div>
            <div>
              <h2>Camera:</h2>
              <p>Canon EOS 5D Mark IV DSLR</p>
            </div>
            <div>
              <h2>Lens:</h2>
              <p>Canon EF 70-200mm f/2.8L IS III USM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SerenityPage;
