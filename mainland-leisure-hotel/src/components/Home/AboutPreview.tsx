import asdf from "../../assets/Images/asdf.jpeg";
import {aboutpreview} from "../../data/aboutpreview";
import "../../styles/aboutpreview.css"
function AboutPreview () {
    return(
        <>
          <section className="aboutpreview">
           <div>
            <div>
                <img src={asdf} alt="asdf" className="about-img" />
            </div>

            <div>
                <h2>Welcome</h2>
                <h1>Experience Comfort <br /> Like Never Before</h1>

                <p>Mainland Leisure View Hotel is a piece of comfort, <br />hospitalty and relaxation.  
                We are commited to providing <br />excellent services to make your stay  memorable whether <br /> you are here for business or leisure.</p>

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