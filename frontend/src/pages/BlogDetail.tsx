import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To fetch the blog ID from the URL
import { userBlog } from "../store/blog"; // Assuming you have a store for fetching the blog

const BlogDetail = () => {
  const { bid } = useParams(); // Extract the blog ID from the URL
  const { blogs } = userBlog(); // Get blogs from the store
  const [blog, setBlog] = useState<any>(null); // State to store the selected blog

  useEffect(() => {
    if (bid) {
      const selectedBlog = blogs.find((blog) => blog._id === bid);
      setBlog(selectedBlog);
    }
  }, [bid, blogs]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pt-28 flex justify-center">
  <div className="w-[30%] bg-white shadow-md mt-8 rounded-lg overflow-hidden text-justify grid place-items-center space-y-8">
    <h1 className="text-4xl font-bold mt-9 text-center">{blog.title}</h1>

    <div>
      <img
        src={blog.image}
        alt="Blog Image"
        className="h-96 object-cover"
      />
    </div>

    <div>

      <div className="space-y-3  "> 
      {blog.content.split('\n').map((paragraph: string, index: number) => (
          <p key={index} className="text-md mb-4">{paragraph}</p>
        ))}
      </div>

      <div className="flex space-x-4 text-black mt-4 text-xs">
        <p>Created by: {blog.name}</p>
        <p>
          Created at:{" "}
          {blog.createdAt
            ? new Date(blog.createdAt).toLocaleDateString()
            : "N/A"}
        </p>
        <p>
          Updated at:{" "}
          {blog.updatedAt
            ? new Date(blog.updatedAt).toLocaleDateString()
            : "N/A"}
        </p>
      </div>
    </div>
  </div>
</div>



  
    
  );
};

export default BlogDetail;
