import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { userBlog } from "../store/blog";
import Hero from "./Hero";

const Cards = () => {
  const { blogs, fetchBlogs, deleteBlog } = userBlog(); // Get blogs and delete function from the store
  const navigate = useNavigate();  // Hook for navigation

  useEffect(() => {
    fetchBlogs(); // Fetch blogs when the component mounts
  }, [fetchBlogs]);

  const handleDelete = async (bid: string) => {
    const { success, message } = await deleteBlog(bid);
    if (success) {
      console.log(message);
    } else {
      // Handle failure
      console.error(message);
    }
  };

  // Navigate to the edit page for a specific blog
  const handleEdit = (bid: string) => {
    navigate(`/edit/${bid}`);  // Redirect to the edit page
  };

  return (
    <div className="">
      <Hero />

      <h1 className="text-3xl font-bold mt-9">Recent Blog</h1>
      <div className="grid grid-cols-1 place-items-center  sm:grid-cols-2 gap-32 px-8">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog._id} className="flex bg-white shadow-md mt-8 rounded-lg overflow-hidden">
              <img src={blog.image} alt="Card Image" className="h-56 object-cover" />
              <div className="p-4 w-2/3">
                <h3 className="font-bold text-3xl mb-2">{blog.title}</h3>
                <p className=" text-sm mb-4 max-w-md">{blog.content}</p>
                <div className="flex space-x-4 text-gray-500 text-xs">
                  <p>Created by: {blog.name}</p>
                  <p>Created at: {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : "N/A"}</p>
                  <p>Updated at: {blog.updatedAt ? new Date(blog.updatedAt).toLocaleDateString() : "N/A"}</p>
                </div>
                {/* Edit Button */}
                <button
                  onClick={() => handleEdit(blog._id)}  
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-yellow-600"
                >
                  Edit
                </button>
                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 ml-4 hover:bg-red-600"
                >
                  Delete
                </button>
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

export default Cards;