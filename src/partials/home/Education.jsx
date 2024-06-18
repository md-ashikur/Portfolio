import pub from "../../images/pub.png";

const Education = () => {
  return (
    <div className="lg:px-20 px-5 py-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold gradient-text  mb-10">
        Education
      </h1>
      <div className="flex lg:flex-row flex-col gap-5 items-center justify-center border border-third rounded-2xl p-5 lg:max-w-[70vw]">
        <img src={pub} alt="" className="w-28 h-28 " />
        <div className="col-span-3 ">
          <h2 className="text-2xl font-bold ">Pundra University of Science and Technology, Bogura</h2>
          <p>B.Sc. in Computer Science and Engineering</p>
          <p className="text-sm">2022 - 2025(expected)</p>

          <p className="text-sm mt-4"><span className="font-bold">Activities and societies:</span> Programming Contest, Event Management, Project Showcase, Competitive Programming community.</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
