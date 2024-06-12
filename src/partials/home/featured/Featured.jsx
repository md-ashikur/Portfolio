import f1 from "../../../images/iut certificate.jpeg";

const Featured = () => {
  return (
    <div className="lg:px-20 px-5 py-20" id="content">
      <h1 className="text-4xl font-bold text-primary text-center mb-10">
        Featured
      </h1>
      <div className="grid grid-cols-3 gap-5 ">

        <div className="border border-third shadow-md hover:shadow-primary backdrop-brightness-125 backdrop-blur-[2px]  rounded-2xl overflow-hidden ease-out duration-300">
          <div>
            <img src={f1} alt="" />
          </div>
          <div className="py-4 px-3">
            <h2 className="font-semibold text-lg mb-2">
              IUT 11th National ICT Fest 2024
            </h2>
            <p className="text-sm">
              It was my first onsite programming Contest. I got a chance to
              represent my university in this Inter University Programming
              Contest.
            </p>
          </div>
        </div>
        <div className="border border-third shadow-md hover:shadow-primary backdrop-brightness-125 backdrop-blur-[2px]  rounded-2xl overflow-hidden ease-out duration-300">
          <div>
            <img src={f1} alt="" />
          </div>
          <div className="py-4 px-3">
            <h2 className="font-semibold text-lg mb-2">
              IUT 11th National ICT Fest 2024
            </h2>
            <p className="text-sm">
              It was my first onsite programming Contest. I got a chance to
              represent my university in this Inter University Programming
              Contest.
            </p>
          </div>
        </div>
        <div className="border border-third shadow-md hover:shadow-primary backdrop-brightness-125 backdrop-blur-[2px]  rounded-2xl overflow-hidden ease-out duration-300">
          <div>
            <img src={f1} alt="" />
          </div>
          <div className="py-4 px-3">
            <h2 className="font-semibold text-lg mb-2">
              IUT 11th National ICT Fest 2024
            </h2>
            <p className="text-sm">
              It was my first onsite programming Contest. I got a chance to
              represent my university in this Inter University Programming
              Contest.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Featured;