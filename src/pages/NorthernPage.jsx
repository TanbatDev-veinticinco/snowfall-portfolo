import "./NorthernPage.css";
import image1 from "../assets/heroimg2.jpg";
import image2 from "../assets/north2.jpg";
import image3 from "../assets/north3.jpg";
import image4 from "../assets/contactpic1.jpg";
import image5 from "../assets/north4.jpg";

const NorthernPAge = () => {
  const pictureData = [
    { image: image1, alt: "rock" },
    { image: image2, alt: "rock" },
    { image: image3, alt: "rock" },
    { image: image4, alt: "rock" },
    { image: image5, alt: "rock" },
  ];

  return (
    <section className="north-sec">
      <div className="north-cont">
        <div className="nor">
          <h3>Northern Lights Over Lapland</h3>
          <p>
            Immerse yourself in the mesmerizing dance of the Northern Lights
            over the Arctic skies of Abisko, Sweden.{" "}
          </p>
          <p>
            Using the Sony A7R IV and its exceptional low-light capabilities,
            capture the vivid colors and dynamic patterns of the auroras against
            the stark winter landscape. This project is a visual journey into
            the ethereal beauty of the northern lights.
          </p>
        </div>
        <div className="north">
          <div>
            {[...pictureData].map((picture, index) => {
              return (
                <div key={index} className="northern">
                  <img src={picture.image} alt={picture.alt} />
                </div>
              );
            })}
          </div>

          <div className="about-northern">
            <div>
              <h2>Location:</h2>
              <p>Abisko, Sweden</p>
            </div>
            <div>
              <h2>Date:</h2>
              <p>Dec 22, 2023</p>
            </div>
            <div>
              <h2>Camera:</h2>
              <p>Sony A7R IV Mirrorless</p>
            </div>
            <div>
              <h2>Lens:</h2>
              <p>Sony A7R IV Mirrorless</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NorthernPAge;
