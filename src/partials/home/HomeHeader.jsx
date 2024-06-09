import { FaGithub } from "react-icons/fa";
import ashik from "../../images/as.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const HomeHeader = () => {
  return (
    <div>
      <section id="content" className="pt-20">
        <div className="bg-gradiant"></div>
        <div className=" grid lg:grid-cols-2 px-5 lg:px-20 z-10 relative">
          <div className="flex flex-col lg:justify-center lg:h-screen uppercase ">
            <h2 className="lg:text-4xl text-2xl font-bold ">
              I am <span className="text-primary">Md. Ashikur Rahman</span>
            </h2>
            <h1 className="lg:text-6xl text-4xl font-bold">
              An enthusiastic web application Developer
            </h1>

            <div className="my-5 flex lg:flex-row flex-col lg:items-center items-start">
              <button className="text-base lg:mr-5 border border-primary rounded-full hover:bg-primary px-5 py-2">
                Download Resume
              </button>
              <div className="flex my-5 lg:my-0 justify-center">
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
          </div>

          <div className="flex items-center justify-center lg:justify-end lg:h-screen overflow-hidden lg:pr-20">
            <div className=" w-72 lg:h-[auto] lg:w-[28vw] relative -bottom-10">
              <img
                src={ashik}
                alt=""
                className="w-full h-auto grayscale bg-cyan-500 hover:grayscale-0 hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHeader;
