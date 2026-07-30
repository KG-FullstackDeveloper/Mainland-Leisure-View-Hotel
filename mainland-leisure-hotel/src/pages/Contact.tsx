import PageHeader from "../components/layouts/PageHeader";
import Navbar from "../components/layouts/Navbar";
import "../styles/contact.css";
import { Link } from "react-router-dom";
import { ChevronRight, MapPin } from "lucide-react";

function Contact() {
  return (
    <>
      <PageHeader />
      <Navbar />
      <section>
        <div className="contact-hero">
          <h1>Contact Us</h1>

          <div className="fis">
            <div className="fis-link">
              <Link to="/">Home </Link>
              <ChevronRight />{" "}
            </div>

            <p>Contact</p>
          </div>
        </div>

        <div>
          <div>
            <h1>Get In Touch</h1>
          </div>

          <div>
            <p>
              We are here to help you.Reach out to us <br /> for reservations,
              inquiries or feedback.
            </p>
          </div>

          <div>
            <MapPin />
            <div>
                <h2>Address</h2>
                <div><p>2 Ayilara St. Off Clegg Street, <br /> Surulere,Lagos.</p></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
