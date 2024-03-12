import Marquee from "react-fast-marquee";
import "./Skills.css";
const Skills = () => {
  return (
    <div className="skill">
      <div className="text-center ">
        <h2 className="text-5xl font-bold font-[sora] my-5 gradient-text">
          My Skills
        </h2>
      </div>

      <Marquee autoFill pauseOnHover gradient gradientColor="#570BFB" gradientWidth="400px" speed="70" className="h-64">
        <div className="border-2 border-primary w-28 h-20 hover:scale-110 hover:bg-primary m-5">1</div>
        <div className="border-2 border-primary w-28 h-20 hover:scale-110 hover:bg-primary m-5">2</div>
        <div className="border-2 border-primary w-28 h-20 hover:scale-110 hover:bg-primary m-5">3</div>
        <div className="border-2 border-primary w-28 h-20 hover:scale-110 hover:bg-primary m-5">4</div>
        <div className="border-2 border-primary w-28 h-20 hover:scale-110 hover:bg-primary m-5">5</div>
        <div className="border-2 border-primary w-28 h-20 hover:scale-110 hover:bg-primary m-5">6</div>
        <div className="border-2 border-primary w-28 h-20 hover:scale-110 hover:bg-primary m-5">7</div>
        <div className="border-2 border-primary w-28 h-20 hover:scale-110 hover:bg-primary m-5">8</div>
        <div className="border-2 border-primary w-28 h-20 hover:scale-110 hover:bg-primary m-5">9</div>
        <div className="border-2 border-primary w-28 h-20 hover:scale-110 hover:bg-primary m-5">10</div>
      </Marquee>
    </div>
  );
};

export default Skills;
