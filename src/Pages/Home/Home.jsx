import "./Home.css";
import Works from "../Works/Works";
import Skills from "../Skills/Skills";
import Testimonials from "../Testimonials/Testimonials";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import HomeHeader from "../../partials/home/HomeHeader";
import AboutBody from "../../partials/about/AboutBody";
import Featured from "../../partials/home/featured/Featured";
const Home = () => {
  return (
    <div >
     <HomeHeader/>
     <AboutBody/>
     {/* <Services /> */}
     <Featured/>
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
