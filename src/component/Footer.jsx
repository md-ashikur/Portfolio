import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-64 text-base flex justify-end flex-col">
      <nav className="flex justify-center flex-wrap space-x-4 ">
        <Link
          to="/"
          className="font-medium px-3 py-2  hover:text-[#7C49E4] hover:text-slate-900"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="font-medium px-3 py-2  hover:text-slate-900"
        >
          Projects
        </Link>
        <Link
          to="/skills"
          className="font-medium px-3 py-2  hover:text-slate-900"
        >
          Skills
        </Link>

        <Link
          to="/testimonials"
          className="font-medium px-3 py-2  hover:text-slate-900"
        >
          Testimonials
        </Link>
        <Link
          to="/blogs"
          className="font-medium px-3 py-2  hover:text-slate-900"
        >
          Blogs
        </Link>
        <Link
          to="/contact"
          className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:text-slate-900"
        >
          Contact
        </Link>
      </nav>

      <p className="text-center my-5">© Developer Portfolio by <a href="https://www.linkedin.com/in/md-ashikur-rahman/" className="text-primary">Md. Ashikur Rahman</a></p>
    </div>
  );
};

export default Footer;
