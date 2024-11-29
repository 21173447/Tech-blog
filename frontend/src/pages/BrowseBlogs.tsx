import { useEffect } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate for navigation
import { userBlog } from "../store/blog"; 
import Hero from "../Components/Hero";

const BrowseBlogs = () => {
  const { blogs, fetchBlogs } = userBlog(); 
  const navigate = useNavigate();  // Hook for navigation

  useEffect(() => {
    fetchBlogs(); 
  }, [fetchBlogs]);

  // Navigate to the blog detail page
  const handleClick = (bid: string) => {
    navigate(`/blog/${bid}`);  // Redirect to the blog detail page
  };

  return (
    <div>
      <Hero />

      <h1 className="text-3xl font-bold mt-9">Recent Blog</h1>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 gap-32 px-8">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="flex bg-white shadow-md mt-8 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleClick(blog._id)}  // Handle click to view the blog
            >
              <img src={blog.image} alt="Card Image" className="h-56 object-cover" />
              <div className="p-4 w-2/3">
                <h3 className="font-bold text-3xl mb-2">{blog.title}</h3>
                <p className="text-sm mb-4 max-w-md">{blog.content}</p>
                <div className="flex space-x-4 text-gray-500 text-xs">
                  <p>Created by: {blog.name}</p>
                  <p>Created at: {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : "N/A"}</p>
                  <p>Updated at: {blog.updatedAt ? new Date(blog.updatedAt).toLocaleDateString() : "N/A"}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBlogs;
