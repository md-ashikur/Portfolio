import "./Home.css";
import Skills from "../Skills/Skills";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import HomeHeader from "../../partials/home/HomeHeader";
import AboutBody from "../../partials/about/AboutBody";
import Featured from "../../partials/home/featured/Featured";
import Education from "../../partials/home/Education";
import Portfolio from "../portfolio/Portfolio";
const Home = () => {
  return (
    <div>
      <HomeHeader />
      <AboutBody />
      <Featured />
      <Education />
      <Skills />
      <Portfolio />
      <Blogs />
      <Contact />
    </div>
  );
};

export default Home;
