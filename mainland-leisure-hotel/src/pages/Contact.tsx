import PageHeader from "../components/layouts/PageHeader";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

import "../styles/contact.css";

import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Phone, Mail, Clock } from "lucide-react";

function Contact() {
  return (
    <>
      <PageHeader />
      <Navbar />

      {/* HERO */}

      <section className="contact-hero">
        <h1>Contact Us</h1>

        <div className="breadcrumb">
          <Link to="/">Home</Link>

          <ChevronRight size={18} />

          <span>Contact</span>
        </div>
      </section>

      {/* CONTACT */}

      <section className="contact-section">
        {/* LEFT */}

        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>
            We are here to help you. Reach out to us
            <br />
            for reservations, enquiries or feedback.
          </p>

          <div className="info-item">
            <div className="icon-circle">
              <MapPin size={18} />
            </div>

            <div>
              <h3>Address</h3>

              <p>
                2 Ayilara St. Off Clegg Street
                <br />
                Surulere, Lagos.
              </p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle">
              <Phone size={18} />
            </div>

            <div>
              <h3>Phone</h3>

              <p>0814 583 9679</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle">
              <Mail size={18} />
            </div>

            <div>
              <h3>Email</h3>

              <p>info@mlviewhotel.com.ng</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-circle">
              <Clock size={18} />
            </div>

            <div>
              <h3>Working Hours</h3>

              <p>Mon - Sun : 24 Hours</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <form className="contact-form">
          <div className="row">
            <input type="text" placeholder="Your Name" required />

            <input type="email" placeholder="Your Email" required />
          </div>

          <div className="row">
            <input type="text" placeholder="Your Phone" />

            <input type="text" placeholder="Subject" />
          </div>

          <textarea placeholder="Your Message" rows={8} required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
