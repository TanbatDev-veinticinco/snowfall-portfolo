import "./RockiesPage.css";
import image1 from "../assets/heroimg3.jpg";
import image2 from "../assets/contactpic2.jpg";
import image3 from "../assets/rockies1.jpg";
import image4 from "../assets/rockies2.jpg";
import image5 from "../assets/rockies3.jpg";

const RockiesPage = () => {
  const pictureData = [
    { image: image1, alt: "rock" },
    { image: image2, alt: "rock" },
    { image: image3, alt: "rock" },
    { image: image4, alt: "rock" },
    { image: image5, alt: "rock" },
  ];

  return (
    <section className="rockies-sec">
      <div className="rockies-cont">
        <div className="rok">
          <h3>Rockies Winter Wonderland</h3>
          <p>
            Embark on a photographic adventure in the snowy landscapes of Banff,
            Canada. With the Nikon D850, seize the opportunity to capture the
            grandeur of the Canadian Rockies covered in a pristine blanket of
            snow.{" "}
          </p>
          <p>
            From frozen lakes to majestic mountain peaks, this project showcases
            the breathtaking beauty of winter in one of the world's most iconic
            natural settings.
          </p>
        </div>
        <div className="rockies">
          <div>
            {[...pictureData].map((picture, index) => {
              return (
                <div key={index} className="rocky">
                  <img src={picture.image} alt={picture.alt} />
                </div>
              );
            })}
          </div>

          <div className="about-rockies">
            <div>
              <h2>Location:</h2>
              <p>Banff, Canada</p>
            </div>
            <div>
              <h2>Date:</h2>
              <p>Dec 8, 2022</p>
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

export default RockiesPage;
