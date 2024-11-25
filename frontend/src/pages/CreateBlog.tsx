import React, { useState } from 'react';

const CreateBlog = () => {
  // State for form data (just for UI without submission functionality)
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Create a New Blog</h2>

      <form className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        {/* Blog Image URL Input */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-lg font-medium text-gray-700">Image URL</label>
          <input
            id="image"
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your blog content here"
           
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
