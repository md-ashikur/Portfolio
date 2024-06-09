import { Outlet } from "react-router-dom";

import '../index.css';
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/Footer";

const Main = () => {
    return (
        <div >
            <Navbar/>
            <Outlet/>
            <Footer/>

        </div>
    );
};

export default Main;