import "./ContactPage.css";
import picimage from "../assets/personimg.jpg";
import picimage1 from "../assets/heroimg1.jpg";
import picimage2 from "../assets/heroimg2.jpg";
import picimage3 from "../assets/heroimg3.jpg";
import picimage4 from "../assets/heroimg4.jpg";
import picimage5 from "../assets/heroimg5.jpg";
import picimage6 from "../assets/contactpic1.jpg";
import picimage7 from "../assets/contactpic2.jpg";

const ContactPage = () => {
  const imgaeData = [
    { picture: picimage1 },
    { picture: picimage2 },
    { picture: picimage3 },
    { picture: picimage4 },
    { picture: picimage5 },
    { picture: picimage6 },
    { picture: picimage7 },
  ];

  return (
    <section className="contact-page">
      <div className="conto">
        <div className="contact-1">
          <div className="topimg">
            <img src={picimage} alt="" />
          </div>
          <h2>Sam Johns</h2>
        </div>
        <div className="contact-2">
          <h3>Contact Me</h3>
          <p>
            Thank you for considering reaching out! Whether you have a
            photography project in mind, a collaboration proposal, or just want
            to share your thoughts, I'd love to hear from you. Feel free to
            connect through any of the following channels:
          </p>
        </div>
        <div className="contact-3">
          <h3>Address:</h3>
          <p>New York, USA</p>
        </div>
        <div className="contact-4">
          <h3>Phone No.:</h3>
          <p>(123) 456 7890</p>
        </div>
        <div className="contact-5">
          <h3>Email:</h3>
          <p>sam@gmail.com</p>
        </div>
        <div className="contact-6">
          <h3>Follow Me:</h3>
          <div className="contact-icon">
            <a href="#" className="">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" className="">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="">
              <i class="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
        <div className="contact-7">
          <p>
            I value your time, and I'm committed to responding promptly to all
            inquiries. Looking forward to connecting with you and exploring the
            exciting possibilities ahead!
          </p>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel-inner">
          {[...imgaeData, ...imgaeData].map((image, index) => (
            <div className="caro" key={index}>
              <img src={image.picture} alt={`carousel-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
