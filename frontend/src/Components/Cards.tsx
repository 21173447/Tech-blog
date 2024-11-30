import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userBlog } from "../store/blog";
import Hero from "./Hero";

const Cards = () => {
  const { blogs, fetchBlogs, deleteBlog } = userBlog();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const handleDelete = async (bid: string) => {
    const { success, message } = await deleteBlog(bid);
    if (success) {
      console.log(message);
    } else {
      console.error(message);
    }
  };

  const handleEdit = (bid: string) => {
    navigate(`/edit/${bid}`);
  };

  return (
    <div className="">
      <Hero />

      <h1 className="text-3xl font-bold mt-9 py-10 text-center">
        Your Uploads
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-8">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white shadow-md rounded-md p-4 mt-4"
            >
              <img
                src={blog.image}
                alt="Card Image"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="font-bold text-xl mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{blog.content}</p>
              <div className="flex justify-between text-xs text-gray-500">
                <p>Created by: {blog.name}</p>
                <p>
                  Created at:{" "}
                  {blog.createdAt
                    ? new Date(blog.createdAt).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
              <div className="flex mt-4 space-x-2">
                <button
                  onClick={() => handleEdit(blog._id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(blog._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
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
