import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To fetch the blog ID from the URL
import { userBlog } from "../store/blog"; // Assuming you have a store for fetching the blog

const BlogDetail = () => {
  const { bid } = useParams();  // Extract the blog ID from the URL
  const { blogs } = userBlog(); // Get blogs from the store
  const [blog, setBlog] = useState<any>(null);  // State to store the selected blog

  useEffect(() => {
    if (bid) {
      const selectedBlog = blogs.find((blog) => blog._id === bid);
      setBlog(selectedBlog);
    }
  }, [bid, blogs]);

  if (!blog) {
    return <p>Loading...</p>;  // Loading state while the blog data is fetched
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mt-9">{blog.title}</h1>
      <div className="flex bg-white shadow-md mt-8 rounded-lg overflow-hidden">
        <img src={blog.image} alt="Blog Image" className="h-56 object-cover" />
        <div className="p-4 w-2/3">
          <p className="text-sm mb-4">{blog.content}</p>
          <div className="flex space-x-4 text-gray-500 text-xs">
            <p>Created by: {blog.name}</p>
            <p>Created at: {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : "N/A"}</p>
            <p>Updated at: {blog.updatedAt ? new Date(blog.updatedAt).toLocaleDateString() : "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
