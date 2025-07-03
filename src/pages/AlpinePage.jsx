import "./AlpinePage.css";
import image1 from "../assets/heroimg1.jpg";
import image2 from "../assets/contactpic2.jpg";
import image3 from "../assets/alpine3.jpg";
import image4 from "../assets/alpine4.jpg";
import image5 from "../assets/alpine5.jpg";

const AlpinePage = () => {
  const pictureData = [
    { image: image1, alt: "rock" },
    { image: image2, alt: "rock" },
    { image: image3, alt: "rock" },
    { image: image4, alt: "rock" },
    { image: image5, alt: "rock" },
  ];

  return (
    <section className="alpine-sec">
      <div className="alpine-cont">
        <div className="abt">
          <h2>Alpine Adventures in Innsbruck</h2>
          <p>
            Explore the enchanting alpine landscapes surrounding Innsbruck
            during the winter season. Capture the snow-covered peaks of the
            Austrian Alps against the backdrop of the historic city.
          </p>
          <p>
            Experiment with different compositions, from wide-angle shots of the
            snow-capped mountains to close-ups of traditional alpine chalets
            adorned with icicles. Embrace the interplay between the vibrant
            cultural life in the city and the serene, snow-laden landscapes just
            a short distance away.
          </p>
        </div>
        <div className="alpha">
          <div>
            {[...pictureData].map((picture, index) => {
              return (
                <div key={index} className="alpine">
                  <img src={picture.image} alt={picture.alt} />
                </div>
              );
            })}
          </div>

          <div className="about-alpine">
            <div>
              <h2>Location:</h2>
              <p>Innsbruck, Austria</p>
            </div>
            <div>
              <h2>Date:</h2>
              <p>Jan 4, 2024</p>
            </div>
            <div>
              <h2>Camera:</h2>
              <p>Nikon D850 DSLR</p>
            </div>
            <div>
              <h2>Lens:</h2>
              <p>Nikon AF-S NIKKOR 24-70mm f/2.8E ED VR</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlpinePage;
