import "./Home.css";
import ashik from "../../assets/images/ashik.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import {  FaFacebookF } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import Services from "../Services/Services";
import Works from "../Works/Works";
import Skills from "../Skills/Skills";
import Testimonials from "../Testimonials/Testimonials";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
const Home = () => {
  return (
    <div className=" ">
      {/* section- 1 start-=-=-=-=-=-=-=-=-=-=-=-=-= */}
      <section className="grid grid-cols-2 px-20">
        <div className="flex flex-col justify-center h-screen uppercase ">
          <h2 className="text-4xl font-bold ">
            I am <span className="text-primary">Md. Ashikur Rahman</span>
          </h2>
          <h1 className="text-6xl font-bold">
            A Professional Software Developer
          </h1>

          <div className="my-5 flex items-center">
            <button className="text-base mr-5 border border-primary rounded-full hover:bg-primary px-5 py-2">
              Download Resume
            </button>
            <a href="https://github.com/md-ashikur">
              <button className="socialBtn">
                <FaGithub />
              </button>
            </a>

            <a href="https://www.linkedin.com/in/md-ashikur-rahman/">
             
              <button className="socialBtn">
                <FaLinkedinIn />
              </button>
            </a>

            <a href="https://leetcode.com/ashikur1/">
              <button className="socialBtn">
                <SiLeetcode />
              </button>
            </a>
            <a href="https://twitter.com/mdashik_1">
              <button className="socialBtn">
                <FaXTwitter />
              </button>
            </a>
            <a href="https://www.facebook.com/ashikur.rahman999">
              <button className="socialBtn">
                <FaFacebookF />
              </button>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-end h-screen mr-20">
          <div className="hover:border-2 hover:border-primary h-96 w-96 rounded-3xl overflow-hidden rotate-12 hover:rotate-0 transition duration-300 ease-in-out">
            <img
              src={ashik}
              alt=""
              className="w-full h-auto grayscale hover:grayscale-0 hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </section>
      {/* section- 1 end-=-=-=-=-=-=-=-=-=-=-=-=-= */}

      <section>
        <Services />
      </section>
     <section className="my-20 bg-red-200">
     <Skills/>
     </section>
      <Works />

     <section >
     <Testimonials/>
     </section>

      <Blogs/>
      <Contact/>
    </div>
  );
};

export default Home;
