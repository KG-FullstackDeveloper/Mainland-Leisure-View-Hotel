import { FaCalendar, FaUser, FaBed } from "react-icons/fa";
import heroImage from "../../assets/Images/heroImage.jpeg";
import "../../styles/hero.css";
function Hero() {
  return (
    <>
    <div className="hero">
        <img src= {heroImage} alt="Hero Image" className="hero-image" />
      <div className="hero-content">
        <h2><span>Welcome to</span><br /> Mainland Leisure View Hotel</h2>
        <p>Comfortable rooms, excellent services and <br /> a relaxing environment in the  heart of Surulere, Lagos</p>
        <div className="book-btn">
            <button className="book-now">Book Now</button>
            <button className="learn-more">Explore Rooms</button>
        </div>
      </div>
    </div>
    <div className="real-hero">
    <div className="date">
        <div>
            <div className="q">
                <p><FaCalendar /></p>
            </div> 
            <div>
                <p>CHECK-IN <br />Mon, May 20, 2024</p>
            </div>
        </div>

        <div>
            <div className="q">
                <p><FaUser /></p>
            </div>

            <div>
                <p>GUESTS<br />2 ADULTS</p>
            </div>
        </div>

        <div>
            <div className="q">
                <p><FaCalendar /></p>
            </div>
            <div>
                <p>CHECK-OUT <br />Tue, May 21, 2024</p>
            </div>
        </div>

        <div>
            <div className="q">
                <p><FaBed /></p>
            </div>
            <div>
                <p>ROOM <br />Select Room</p>
            </div>
        </div>
    </div>
    </div>
    </>
  );
}

export default Hero;