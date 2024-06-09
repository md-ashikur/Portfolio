import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("bg-none");

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition === 0) {
        setNavbarBackground("backdrop-blur-md drop-shadow-md");
      } else {
        setNavbarBackground(" backdrop-blur-md drop-shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${navbarBackground} fixed top-0 w-full px-10 lg:px-20  py-3 z-50`}
    >
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-3 flex items-center justify-between">
        <div className="col-span-1 flex items-center  flex-shrink-0 gap-3 ">
        
          <span className="font-semibold text-3xl tracking-tight">
            Ashik
          </span>
        </div>

        {/* desktop------------- */}
        <div className="hidden col-span-2 md:flex md:items-center justify-between md:w-auto ">
          <div className=" text-md  flex gap-5 ">
            <NavLink
              to="/"
              className="block mt-4 md:inline-block md:mt-0   mr-4"
            >
             <p> Home</p>
            </NavLink>
            <NavLink
              to="/about"
              className="block mt-4 md:inline-block md:mt-0   mr-4"
            >
             <p> About</p>
            </NavLink>
          
            <NavLink
              to="/portfolio"
              className="block mt-4 md:inline-block md:mt-0   mr-4"
            >
             Portfolio
            </NavLink>
            <NavLink
              to="/blog"
              className="block mt-4 md:inline-block md:mt-0  mr-4"
            >
              Blog
            </NavLink>
            <NavLink
              to={"/contact"}
              className="block  mt-4 md:inline-block md:mt-0  "
            >
              Contact
            </NavLink>
          </div>

         
        </div>

        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* {/* Mobile menu   */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4 `}>
        <NavLink to="/" className="block mb-2">
          Home
        </NavLink>
        <NavLink to="/about" className="block mb-2">
          About
        </NavLink>
        <NavLink to="/portfolio" className="block mb-2">
         Portfolio
        </NavLink>
        <NavLink to="/blog" className="block mb-2">
         Blog
        </NavLink>
        <NavLink to="/contact" className="block mb-2">
          Contact
        </NavLink>
        
      </div>

      
    </nav>
  );
};

export default Navbar;
