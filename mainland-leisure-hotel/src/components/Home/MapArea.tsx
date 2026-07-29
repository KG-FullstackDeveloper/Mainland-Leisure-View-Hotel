import { MapPin } from "lucide-react";
import "../../styles/maparea.css";
function MapArea() {
  return (
    <section className="map-area">
      <div className="map-a">
        <h2 className="h2">Our Location</h2>

        <div className="mapa">
          <div className="locate">
            <MapPin size={17} />
          </div>
          <div className="location">
            2 Ayilara St. Off Clegg Street, <br /> Surulere, Lagos, Nigeria.
          </div>
        </div> 
        <div className="link-div">
           <a
          href="https://maps.google.com/?q=Mainland+Leisure+View+Hotel"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Get Directions
        </a> 
        </div>
        
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1120362555885!2d3.3582250749928257!3d6.507499993484834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c40c3f12ce7%3A0x626752480f3f0691!2sMainland%20Leisure%20View%20Hotel!5e0!3m2!1sen!2sng!4v1785248968884!5m2!1sen!2sng"
          width="600"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      <div>
        <h2 className="h2">Newsletter</h2>
        <p>
          Subscribe to our newsletter for updates <br /> and special offers
        </p>
        <div>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
}

export default MapArea;
