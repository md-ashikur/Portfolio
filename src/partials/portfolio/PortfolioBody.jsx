import "./Portfolio.css";
import traveloo from "../../images/portfolio/traveloo.png";
import { Link } from "react-router-dom";


const PortfolioBody = () => {
  return (
    <div className="lg:px-20 px-5">
        <h2 className="text-center text-5xl font-bold py-5 my-10 gradient-text">
          My Latest Projects
        </h2>
      <div className="grid lg:grid-cols-3">
        <div className="lg:p-3 ">
            <div className="rounded-xl portfolio-card-img overflow-hidden">
                <img src={traveloo} alt="" className="w-full h-auto"/>
            </div>     
        </div>
        <div className="lg:col-span-2 lg:pl-16 py-5">
                <h2 className="text-3xl font-bold ">Traveloo</h2>
                <p className="text-lg my-5 ">A travel website enabling global travel searches, hotel bookings, and user authentication.</p>

                <div className="  flex flex-wrap gap-2">
                    <Link to={""}><button className="portfolioBtn rounded-lg px-3 py-1">Details</button> </Link>
                    <Link to={""}><button className="portfolioBtn rounded-lg px-3 py-1">Live Demo</button> </Link>
                    <Link to={""}><button className="portfolioBtn rounded-lg px-3 py-1">Client side</button> </Link>
                    <Link to={""}><button className="portfolioBtn rounded-lg px-3 py-1">Server side</button> </Link>
                </div>
            </div>
      </div>
     
    
      <div className="grid lg:grid-cols-3">
        <div className="lg:p-3 ">
            <div className="rounded-xl portfolio-card-img overflow-hidden">
                <img src={traveloo} alt="" className="w-full h-auto"/>
            </div>     
        </div>
        <div className="lg:col-span-2 lg:pl-16 py-5">
                <h2 className="text-3xl font-bold ">Traveloo</h2>
                <p className="text-lg my-5 ">A travel website enabling global travel searches, hotel bookings, and user authentication.</p>

                <div className="  flex flex-wrap gap-2">
                    <Link to={""}><button className="portfolioBtn rounded-lg px-3 py-1">Details</button> </Link>
                    <Link to={""}><button className="portfolioBtn rounded-lg px-3 py-1">Live Demo</button> </Link>
                    <Link to={""}><button className="portfolioBtn rounded-lg px-3 py-1">Client side</button> </Link>
                    <Link to={""}><button className="portfolioBtn rounded-lg px-3 py-1">Server side</button> </Link>
                </div>
            </div>
      </div>
     
    
      <div className="grid lg:grid-cols-3">
        <div className="lg:p-3 ">
            <div className="rounded-xl portfolio-card-img overflow-hidden">
                <img src={traveloo} alt="" className="w-full h-auto"/>
            </div>     
        </div>
        <div className="lg:col-span-2 lg:pl-16 py-5">
                <h2 className="text-3xl font-bold ">Traveloo</h2>
                <p className="text-lg my-5 ">A travel website enabling global travel searches, hotel bookings, and user authentication.</p>

                <div className="  flex flex-wrap gap-2">
                    <Link to={""}><button className="portfolioBtn rounded-lg px-3 py-1">Details</button> </Link>
                    <Link to={""}><button className="portfolioBtn rounded-lg px-3 py-1">Live Demo</button> </Link>
                    <Link to={""}><button className="portfolioBtn rounded-lg px-3 py-1">Client side</button> </Link>
                    <Link to={""}><button className="portfolioBtn rounded-lg px-3 py-1">Server side</button> </Link>
                </div>
            </div>
      </div>
     
    

      <div className="flex justify-center my-5 ">
      <Link to={""}><button className="text-xl font-bold text-primary rounded-lg px-3 py-1">See More</button></Link>
      </div>
    </div>
  );
};

export default PortfolioBody;
