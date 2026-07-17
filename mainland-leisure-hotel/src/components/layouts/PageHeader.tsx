import "../../styles/pageheader.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
function PageHeader() {
  return (
    <>

  <div className="page-header-container">
    <div className="page-header">
        <div>
            <p><FaMapMarkerAlt />  2 Ayilara str, off Clegg street, Surulere, Lagos</p>
        </div>
        
        <div>
            <p><FaPhoneAlt /> +234 1 234 5678</p>
        </div>

        <div>
            <p><FaEnvelope /> info@mlvhotel.com.ng</p>
        </div>
    </div>

    <div className="social-icons">
        <div>
            <p><FaFacebookF /></p>
        </div>
        
        <div>
            <p><FaWhatsapp /></p>
        </div>

        <div>
            <p><FaTwitter /></p>
        </div>
    </div>
  </div>
    </>
  );
}

export default PageHeader;