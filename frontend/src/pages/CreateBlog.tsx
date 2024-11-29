import { useState } from 'react';
import { userBlog } from "../store/blog";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const [newBlog, setNewBlog] = useState({
    image: "",
    name: "",
    title: "",
    content: ""
  });
  const [loading, setLoading] = useState(false);  // Added loading state
  const navigate = useNavigate();
  const { createBlog } = userBlog();
    
  const handleBlog = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission and page reload
    setLoading(true);  // Set loading state to true while creating the blog

    try {
      const { success, message } = await createBlog(newBlog);
      console.log("Success:", success);
      console.log("Message:", message);

      if (success) {
        toast.success(message); 
        setNewBlog({ image: "", name: "", title: "", content: "" }); // Clear form
        navigate('/cards');
      } else {
        toast.error(message); 
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);  // Set loading state back to false after the process
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Create a New Blog</h2>

      <form
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto"
        onSubmit={handleBlog}
      >
        {/* Blog Image URL Input */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-lg font-medium text-gray-700">Image URL</label>
          <input
            id="image"
            type="url"
            value={newBlog.image}
            onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
            required
          />
        </div>

        {/* Blog Name (User ID) Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name (or User ID)</label>
          <input
            id="name"
            type="text"
            value={newBlog.name}
            onChange={(e) => setNewBlog({ ...newBlog, name: e.target.value })}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Blog Title Input */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">Blog Title</label>
          <input
            id="title"
            type="text"
            value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog title"
            required
          />
        </div>

        {/* Blog Content Input */}
        <div className="mb-4">
          <label htmlFor="content" className="block text-lg font-medium text-gray-700">Content</label>
          <textarea
            id="content"
            value={newBlog.content}
            onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your blog content here"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}  // Disable button while submitting
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {loading ? 'Creating...' : 'Create Blog'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
