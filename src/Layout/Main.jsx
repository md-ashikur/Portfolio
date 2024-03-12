import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import '../index.css';

const Main = () => {
    return (
        <div className="bgcolor">
            <Outlet/>
            <Footer/>

        </div>
    );
};

export default Main;