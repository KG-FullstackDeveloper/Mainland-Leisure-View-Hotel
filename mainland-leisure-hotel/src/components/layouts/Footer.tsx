import asdf from "../../assets/Images/mainlogo.jpeg";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import "../../styles/footer.css";
function Footer() {
  return (
    <section className="footer">
      <div className="foot-lead">
        <div className="foot-head">
          <div className="foot-head-hero">
            <div className="div-img">
              <img src={asdf} alt="" className="img" />
            </div>
            <div>
              <h2>
                MAINLAND LEISURE <br /> VIEW HOTEL
              </h2>
            </div>
          </div>
          <p>
            Comfort, hospitality and relaxation <br /> in the heart of Surulere,
            Lagos
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Rooms</a>
            </li>
            <li>
              <a href="#">Facilities</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact Us</h3>
          <ul>
            <li>
              <Phone /> 0909 734 3543
            </li>
            <li>
              <Mail /> info@mlvhotel.com.ng
            </li>
            <li>
              <MapPin />{" "}
              <span className="las">
                2 Ayilara St. Off Clegg Street,
                <br /> Suruler,Lagos.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h3>Follow Us</h3>

        <div className="social-icons">
          <div>
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={17} />
            </a>
          </div>

          <div>
            <a
              href="https://tiktok.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok size={17} />
            </a>
          </div>

          <div>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={17} />
            </a>
          </div>

          <div>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
