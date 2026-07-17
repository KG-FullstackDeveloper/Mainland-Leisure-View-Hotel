import PageHeader from '../components/layouts/PageHeader';
import Navbar from '../components/layouts/Navbar';
import Hero from '../components/Home/Hero';
import AboutPreview from "../components/Home/AboutPreview";
function Home() {
  return (
    <>
    <PageHeader />
    <Navbar />
    <Hero />
    
    <div className='container'>
        <AboutPreview />
    </div>
    </>
  );
}

export default Home;