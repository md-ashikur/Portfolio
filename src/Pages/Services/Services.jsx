const Services = () => {
  return (
    <div className=" lg:p-20 p-5">
      <div className="text-center ">
        <h2 className="text-5xl font-bold font-[sora] my-5 gradient-text">My Quality Services</h2>
        <p>
          I put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>
      </div>

      <div className="mt-6">
        <div className="border-b border-t border-primary hover:border-0 hover:bg-gradient-to-r from-primary  h-28 grid grid-cols-3 content-center gap-5 p-5">
          <div className="flex items-center gap-5 font-bold font-[sora] col-span-2">
          <p className="text-2xl text-primary">01</p>
          <p className="text-2xl lg:text-4xl">Web Design & Development</p>
          </div>
          
        </div>

        <div className="border-b border-primary hover:border-0 hover:bg-gradient-to-r from-primary  h-28 grid grid-cols-3 content-center gap-5 p-5">
          <div className="flex items-center gap-5 font-bold font-[sora] col-span-2">
          <p className="text-2xl text-primary ">02</p>
          <p className="text-2xl lg:text-4xl">Graphics Design</p>
          </div>
          {/* ------------ */}
          
        </div>
      </div>

    
    </div>
  );
};

export default Services;
