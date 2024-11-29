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
        <hr className="border-[3px] w-[45%] border-black" />
      </div>
  
      <div className="grid grid-cols-3 pt-10 w-[50%] place-content-center justify-items-center mx-auto  space-y-4">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white border-[1.5px] w-64 overflow-hidden shadow-md transform hover:scale-105 hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
              onClick={() => handleClick(blog._id)}
            >
              <img
                src={blog.image}
                alt="Card Image"
                className="w-full h-40 object-cover"
              />
              <div className="text-sm p-3 ">
                <h3 className="font-semibold text-lg text-black mb-2">
                  {blog.title.substring(0, 27)}
                </h3>
                <p className="text-black mb-3">
                  {blog.content.substring(0, 99)}
                </p>
  
                <div className="text-xs text-black space-y-1">
                  <p>
                    <span className="font-semibold">Created by:</span>
                    {blog.name}
                  </p>
                  <p>
                    <span className="font-semibold">Created at:</span>
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
    </div>
  );
  
};

export default BrowseBlogs;
