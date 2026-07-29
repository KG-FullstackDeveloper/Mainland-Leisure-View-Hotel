import asdf from "../../assets/Images/mainlogo.jpeg";
import { MapPin, Phone, Mail } from "lucide-react";
import "../../styles/footer.css";
function Footer() {
  return (
    <section className="footer">
      <div className="foot-lead">
        <div className="foot-head">
          <div>
            <div>
              <img src={asdf} alt="" className="img" />
            </div>
            <div>
              <h1>
                MAINLAND LEISURE <br /> VIEW HOTEL
              </h1>
            </div>
          </div>
          <p>
            Comfort, hospitality and relaxation <br /> in the heart of Surulere,
            Lagos
          </p>
        </div>

        <div>
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Rooms</li>
            <li>Facilities</li>
          </ul>
        </div>

        <div>
          <h2>Useful Links</h2>
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
          <h2>Contact Us</h2>
          <ul>
            <li>
              <Phone /> 0909 734 3543
            </li>
            <li>
              <Mail /> info@mlvhotel.com.ng
            </li>
            <li>
              <MapPin />{" "}
              <span>
                2 Ayilara St. Off Clegg Street,
                <br /> Suruler,Lagos.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
