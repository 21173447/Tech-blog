import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { userBlog } from "../store/blog"; 

const BlogDetail = () => {
  const { bid } = useParams(); 
  const { blogs } = userBlog();
  const [blog, setBlog] = useState<any>(null); 

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
<div className="pt-28 flex justify-center py-10">
  <div className="w-[60%] bg-white mt-8 rounded-lg overflow-hidden text-justify p-8 space-y-8"> {/* Increased width and added padding */}
    <h1 className="text-4xl font-bold text-center">{blog.title}</h1>

    <div>
      <img
        src={blog.image}
        alt="Blog Image"
        className="w-full h-96 object-cover" 
      />
    </div>

    <div>
      <div className="space-y-3">
        {blog.content.split('\n').map((paragraph: string, index: number) => (
          <p key={index} className="text-md mb-4">{paragraph}</p>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4 text-black mt-4 text-xs">
        <p>Created by: {blog.name}</p>
        <p>
          Created at:{" "}
          {blog.createdAt
            ? new Date(blog.createdAt).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "N/A"}
        </p>
        <p>
          Updated at:{" "}
          {blog.updatedAt
            ? new Date(blog.updatedAt).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "N/A"}
        </p>
      </div>
    </div>
  </div>
</div>




  
    
  );
};

export default BlogDetail;
