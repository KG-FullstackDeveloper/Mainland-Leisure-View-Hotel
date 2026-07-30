import mainlogo from "../../assets/Images/mainlogo.jpeg";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={mainlogo} alt="" />

        <h2>
          Mainland Leisure <br /> View Hotel
        </h2>
      </div>

      <div className="nav-links">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/rooms">Rooms</Link>
        </div>
        <div>
          <Link to="/facilities">Facilities</Link>
        </div>
        <div>
          <Link to="/gallery">Gallery</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <button>Book Now</button>
    </nav>
  );
}

export default Navbar;
