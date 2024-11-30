import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userBlog } from "../store/blog";
import Hero from "../Components/Hero";

const BrowseBlogs = () => {
  const { blogs, fetchBlogs } = userBlog();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const handleClick = (bid: string) => {
    navigate(`/blog/${bid}`);
  };

  return (
    <div className="">
      <Hero />
      <h1 className="text-center text-3xl font-thin text-black flex justify-center mr-[550px] pt-10">
        Recent Blog
      </h1>
      <div className="flex justify-center pt-5">
        <hr className="border-[3px] w-[60%] border-black" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-10 w-[50%] place-content-center justify-items-center mx-auto">
  {blogs && blogs.length > 0 ? (
    blogs.map((blog) => (
      <div
        key={blog._id}
        className=" w-full overflow-hidden transform hover:scale-105 hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
        onClick={() => handleClick(blog._id)}
      >
        <img
          src={blog.image}
          alt="Card Image"
          className="w-full h-32 object-cover" 
        />
        <div className="text-sm p-2"> 
          <h3 className="font-semibold text-lg text-black mb-1">
            {blog.title.substring(0, 27)}
          </h3>
          <p className="text-black mb-2 text-xs">
            {blog.content.substring(0, 80)}....
          </p>
          <div className="text-xs text-black space-y-1">
            <p>
              <span className="font-semibold"></span> {blog.name}
            </p>
            <p>
              <span className="font-semibold">Posted:</span>{" "}
              {blog.createdAt
                ? new Date(blog.createdAt).toLocaleDateString()
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-white text-center">No blogs available.</p>
  )}
</div>
<div className="flex justify-center pt-5">
        <hr className="border-[3px] w-[60%] border-black" />
      </div>

    </div>
  );
};

export default BrowseBlogs;
