import Marquee from "react-fast-marquee";
import "./Skills.css";

import html from "../../assets/images/html (1).png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/javascript.png";
import git from "../../assets/images/git.png";
import mongodb from "../../assets/images/mongo-db.png";
import mysql from "../../assets/images/mysql.png";
import tailwind from "../../assets/images/tailwind.png";
import bootstrap from "../../assets/images/bootstrap-framework-logo.png";
import figma from "../../assets/images/figma.png";
import illustrator from "../../assets/images/adobe-illustrator.png";
const Skills = () => {
  return (
    <div className="">
      <div className="text-center ">
        <h2 className="text-5xl font-bold font-[sora] my-5 gradient-text">
          My Skills
        </h2>
      </div>

      <Marquee autoFill pauseOnHover speed="80" className="my-10">
        <div className="s-logo ">
          <img src={html} alt="" />
          <p>HTML</p>
        </div>

        <div className="s-logo">
          <img src={css} alt="" />
          <p>CSS</p>
        </div>


        <div className="s-logo">
          <img src={js} alt="" />
          <p>JavaScript</p>
        </div>


        <div className="s-logo">
          <img src={git} alt="" />
          <p>Git</p>
        </div>


        <div className="s-logo ">
          <img src={mongodb} alt="" />
            <p>MongoDB</p>
        </div>


        <div className="s-logo">
          <img src={mysql} alt="" />
            <p>MySQL</p>
        </div>


        <div className="s-logo">
          <img src={tailwind} alt="" />
            <p>Tailwind CSS</p>
        </div>


        <div className="s-logo">
          <img src={git} alt="" />
            <p>Git</p>
        </div>


        <div className="s-logo ">
          <img src={bootstrap} alt="" />
            <p>Bootstrap</p>
        </div>


        <div className="s-logo">
          <img src={figma} alt="" />
            <p>Figma</p>
        </div>


        <div className="s-logo">
          <img src={illustrator} alt="" />
            <p>Illustrator</p>
        </div>


        {/* <div className="s-logo">
          <img src={git} alt="" />
            <p>Git</p>
        </div> */}
      </Marquee>
    </div>
  );
};

export default Skills;
