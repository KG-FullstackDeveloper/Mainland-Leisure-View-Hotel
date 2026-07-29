import { Wifi, WavesLadder, ShieldCheck, Coffee, Car } from "lucide-react";
import "../../styles/fetchure.css";

function Fetch() {
  return (
    <section className="Fetch">
      <div className="fetch-hero">
        <div className="feature-card">
          <span className="icon">
            <Wifi size={40} />
          </span>

          <div className="text">
            <h4>Free Wi-Fi</h4>
            <p>Stay Connected</p>
          </div>
        </div>

        <div className="feature-card">
          <span className="icon">
            <WavesLadder size={40} />
          </span>

          <div className="text">
            <h4>Swimming Pool</h4>
            <p>Relax and Unwind</p>
          </div>
        </div>

        <div className="feature-card">
          <span className="icon">
            <Coffee size={40} />
          </span>

          <div className="text">
            <h4>Free Breakfast</h4>
            <p>Start your day right</p>
          </div>
        </div>

        <div className="feature-card">
          <span className="icon">
            <ShieldCheck size={40} />
          </span>

          <div className="text">
            <h4>24/7 Security</h4>
            <p>Your Safety is Our Priority</p>
          </div>
        </div>

        <div className="feature-card">
          <span className="icon">
            <Car size={40} />
          </span>

          <div className="text">
            <h4>Free Parking</h4>
            <p>Spacious Parking Space</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fetch;
