import "../../styles/navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"><h1>Mainland Leisure View Hotel</h1></div>

      <div className="nav-links">
        <div><a href="/">Home</a></div>
        <div><a href="/about">About</a></div>
        <div><a href="/rooms">Rooms</a></div>
        <div><a href="/contact">Facilities</a></div>
        <div><a href="/book">Gallery</a></div>
        <div><a href="/login">Contact</a></div>
      </div>
      

      <button>Book Now</button>
    </nav>
    );

}

export default Navbar;