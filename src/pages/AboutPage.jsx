import "./AboutPage.css";
import { NavLink } from "react-router-dom";
import person1 from "../assets/About.jpg";
import camera1 from "../assets/camera1.jpg";
import camera2 from "../assets/camera2.jpg";
import camera3 from "../assets/camera3.jpg";
import camera4 from "../assets/camera4.jpg";
import camera5 from "../assets/camera5.jpg";
import lense1 from "../assets/lense1.jpg";
import lense2 from "../assets/lense2.jpg";
import lense3 from "../assets/lense3.jpg";
import lense4 from "../assets/lense4.jpg";
import lense5 from "../assets/lense5.jpg";

const AboutPage = () => {
  const gearItem = [
    {
      img: camera1,
      about: "Fujifilm X-T4 Mirrorless",
      alter: "camera"
    },
    {
      img: camera2,
      about: "Sony A7R IV Mirrorless",
      alter: "camera"
    },
    {
      img: camera3,
      about: "Nikon D850 DSLR",
      alter: "camera"
    },
    {
      img: camera4,
      about: "Canon EOS 5D Mark IV DSLR",
      alter: "camera"
    },
    {
      img: camera5,
      about: "Panasonic Lumix S1 Mirrorless",
      alter: "camera"
    },
    {
      lense: lense1,
      name: "Fujinon XF 18-55mm f/2.8-4 R LM OIS",
      alter: "camera"
    },
    {
      lense: lense2,
      name: "Sony FE 16-35mm f/2.8 GM",
      alter: "camera"
    },
    {
      lense: lense3,
      name: "Nikon AF-S NIKKOR 24-70mm f/2.8E ED VR",
      alter: "camera"
    },
    {
      lense: lense4,
      name: "Canon EF 70-200mm f/2.8L IS III USM",
      alter: "camera"
    },
    {
      lense: lense5,
      name: "Lumix S Pro 24-70mm f/2.8",
      alter: "camera"
    },
  ];

  return (
    <div className="aboutpage">
      <div className="about">
        <div>
          <img src={person1} alt="person" />
        </div>
        <div className="about2">
          <div className="about3">
            <h2>Sam Johns</h2>
            <p>Photographer, Traveler</p>
            <p>New York, USA</p>
          </div>
          <div className="about4">
            <h5>Let's connect</h5>
            <a href="">
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Reach Out →
              </NavLink>
            </a>
          </div>
        </div>
      </div>
      <div className="my-gear">
        <div className="about-me">
          <div className="kcee">
            <h2>About Me</h2>
            <div className="message">
              <p>
                Welcome to the captivating world of Sam's lens, where moments
                transform into timeless stories through the art of photography.
                I am Sam, an enthusiast behind the camera, dedicated to freezing
                fleeting moments in a symphony of pixels and emotions.
              </p>
              <p>
                From the vibrant cityscapes to the serene landscapes, my lens
                captures the beauty that often goes unnoticed. Born with a
                passion for storytelling, I found my true calling in
                photography, where every click narrates a unique tale. With a
                keen eye for detail and an unwavering commitment to
                authenticity, I strive to create images that resonate with the
                heart and soul.
              </p>
              <p>
                My journey as a photographer began as a way to document my own
                experiences and share them with the world. Over the years, it
                evolved into a profound exploration of light, composition, and
                the human connection. Whether it's the soft glow of a sunrise,
                the candid laughter of a family, or the intricate details of
                urban life, I seek to encapsulate the essence of the moment in
                every frame.
              </p>
              <p>
                Photography, for me, is not just about capturing pictures; it's
                about crafting visual narratives that transcend time. Each
                photograph is a chapter, and every collection is a storybook
                filled with emotions, memories, and the beauty of the world as
                seen through my lens.
              </p>
              <p>
                As you browse through my portfolio, you'll witness a diverse
                range of subjects and styles, reflecting my constant pursuit of
                growth and innovation. From portrait sessions that reveal the
                unique personality of each individual to the dynamic energy of
                events and the tranquility of nature, I am committed to
                delivering a visual experience that resonates with you.
              </p>
              <p>
                Collaboration is at the heart of what I do. I cherish the
                opportunity to work with clients who share a passion for
                storytelling and a desire to capture the extraordinary in the
                ordinary. Whether it's a personal photo session, a corporate
                event, or a creative project, I approach each assignment with
                enthusiasm, professionalism, and a commitment to exceeding
                expectations.
              </p>
              <p>
                Thank you for joining me on this photographic journey. I invite
                you to explore the galleries, share in the stories, and perhaps,
                embark on a visual adventure together. Let's create memories
                that last a lifetime and celebrate the beauty that surrounds us,
                one click at a time.
              </p>
            </div>
          </div>
        </div>

        <div className="kcee">
          <h2>My Gear</h2>
          <div className="gear">
            <div className="gear-sec">
              <h3>Cameras:</h3>
              {gearItem
                .filter((gear) => gear.img)
                .map((gear, index) => (
                  <div key={index} className="gear-item">
                    <img src={gear.img} alt={gear.alter} className="gear-img" />
                    <p>{gear.about}</p>
                  </div>
                ))}
            </div>

            <div className="gear-sec">
              <h3>Lenses:</h3>
              {gearItem
                .filter((gear) => gear.lense)
                .map((gear, index) => (
                  <div key={index} className="gear-item">
                    <img src={gear.lense} alt={gear.alter} className="gear-img" />
                    <p>{gear.name}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="gear-section">
            <h3>Accessories:</h3>
            <p>
              Sturdy tripods, lens filters, and weather-resistant camera bags
              ensure that I am well-equipped to handle the diverse challenges
              presented by each unique winter photography project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
