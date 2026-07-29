import PageHeader from "../components/layouts/PageHeader";
import Navbar from "../components/layouts/Navbar";
import Hero from "../components/Home/Hero";
import AboutPreview from "../components/Home/AboutPreview";
import Fetch from "../components/Home/Fetch";
import Photo from "../components/Home/Photo";
import MapArea from "../components/Home/MapArea";
function Home() {
  return (
    <>
      <PageHeader />
      <Navbar />
      <Hero />

      <div className="container">
        <AboutPreview />
      </div>
      <Fetch />

      <div className="container">
        <Photo />
      <MapArea />
      </div>
    </>
  );
}

export default Home;
