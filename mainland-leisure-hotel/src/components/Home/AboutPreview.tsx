import asdf from "../../assets/Images/asdf.jpeg";
import {aboutpreview} from "../../data/aboutpreview";
import "../../styles/aboutpreview.css"
function AboutPreview () {
    return(
        <>
          <section className="aboutpreview">
           <div className="about-we">
            <div>
                <img src={asdf} alt="asdf" className="about-img" />
            </div>

            <div className="wewe">
                <h2>Welcome</h2>
                <h1>Experience Comfort <br /> Like Never Before</h1>

                <p>Mainland Leisure View Hotel is a piece of comfort, hospitalty and relaxation.<br />  
                We are commited to providing excellent services to make your stay<br />  memorable whether you are here for business or leisure.</p>

                <button>Learn More About Us</button>
            </div>

            <div>
              <div className="cards">
                  {aboutpreview.map((aboutpreview) => (
                  <div className="card" key={aboutpreview.id}>
                  <h2>{aboutpreview.title}</h2>
                  <p>{aboutpreview.description}</p>
                  </div>
                  ))}
            </div>
            </div>
           </div>
          </section>
        </>
    );

}

export default AboutPreview;