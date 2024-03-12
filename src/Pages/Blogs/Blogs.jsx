import blog1 from "../../assets/images/blog1.jpg";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="my-20 p-20 bg-[#110818]">
      <div className="text-center ">
        <h2 className="text-5xl font-bold font-[sora] my-3 p-2 gradient-text">
          Recent Blogs
        </h2>
        <p>Explore the Latest Insights: Fresh Perspectives, Timely Content</p>
      </div>

      <div className="grid grid-cols-3 gap-5 my-10">

        <div className="blog-content rounded-2xl overflow-hidden h-96 w-96 relative flex flex-col items-center ">
          <div className="m-5 blog-text p-3 bg-primary h-28 w-auto rounded-xl absolute bottom-0 z-10 text-base">
            <div className="flex gap-5 text-xs">
              <p>Oct 01, 2022</p>
              <p>Comment (0)</p>
            </div>
            <h3 className="font-[sora] font-bold text-xl mt-3">How does ChatGPT generate human-like text?</h3>
          </div>
          <img src={blog1} alt="" />
        </div>

       
        <div className="blog-content rounded-2xl overflow-hidden h-96 w-96 relative flex flex-col items-center ">
          <div className="m-5 blog-text p-3 bg-primary h-28 w-auto rounded-xl absolute bottom-0 z-10 text-base">
            <div className="flex gap-5 text-xs">
              <p>Oct 01, 2022</p>
              <p>Comment (0)</p>
            </div>
            <h3 className="font-[sora] font-bold text-xl mt-3">How does ChatGPT generate human-like text?</h3>
          </div>
          <img src={blog1} alt="" />
        </div>

       
        <div className="blog-content rounded-2xl overflow-hidden h-96 w-96 relative flex flex-col items-center ">
          <div className="m-5 blog-text p-3 bg-primary h-28 w-auto rounded-xl absolute bottom-0 z-10 text-base">
            <div className="flex gap-5 text-xs">
              <p>Oct 01, 2022</p>
              <p>Comment (0)</p>
            </div>
            <h3 className="font-[sora] font-bold text-xl mt-3">How does ChatGPT generate human-like text?</h3>
          </div>
          <img src={blog1} alt="" />
        </div>

       
      </div>

      <div className="flex justify-center">
        <button className="bg-primary px-5 py-2 rounded-full text-base">Read more</button>
      </div>
    </div>
  );
};

export default Blogs;
