import "./Home.css";
import Works from "../Works/Works";
import Skills from "../Skills/Skills";
import Testimonials from "../Testimonials/Testimonials";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import HomeHeader from "../../partials/home/HomeHeader";
import AboutBody from "../../partials/about/AboutBody";
const Home = () => {
  return (
    <div >
     <HomeHeader/>
     <AboutBody/>
     {/* <Services /> */}
      <Skills />
 
      <Works />

      <section>
        <Testimonials />
      </section>

      <Blogs />
      <Contact />
    </div>
  );
};

export default Home;
