import { create } from "zustand";

// Define types for the blog object
interface Blog {
  _id: string; // Assuming you have an ID for each blog
  image: string;
  name: string;
  title: string;
  content: string;
  createdAt?: string; // Optional, but helpful for displaying timestamps
  updatedAt?: string; // Optional, but helpful for displaying timestamps
}

// Define the types for the Zustand store
interface BlogStore {
  blogs: Blog[]; // List of blogs
  setBlogs: (blogs: Blog[]) => void; // Function to update the blog list
  createBlog: (newBlog: Blog) => Promise<{ success: boolean; message: string }>; // Function to create a new blog
  fetchBlogs: () => Promise<void>; // Function to fetch blogs from the server
  deleteBlog: (bid: string) => Promise<{ success: boolean; message: string }>; // Function to delete a blog
}

// Create the Zustand store with typing
export const userBlog = create<BlogStore>((set) => ({
  blogs: [], // Initial empty list of blogs
  setBlogs: (blogs) => set({ blogs }), // Update the state with new blogs

  createBlog: async (newBlog) => {
    // Validate that all fields are filled
    if (!newBlog.image || !newBlog.name || !newBlog.title || !newBlog.content) {
      return { success: false, message: "Please fill in all fields." };
    }

    // Send POST request to create the blog
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    });

    const data = await res.json();

    if (res.ok) {
      // Update the store with the new blog data
      set((state) => ({ blogs: [...state.blogs, data.data] }));
      return { success: true, message: "Blog created successfully." };
    } else {
      return { success: false, message: data.message || "Failed to create blog." };
    }
  },

  fetchBlogs: async () => {
    // Fetch the list of blogs from the server
    const res = await fetch("/api/blogs");
    const data = await res.json();

    if (res.ok) {
      // Update the store with the fetched blog data
      set({ blogs: data.data });
    } else {
      console.error("Failed to fetch blogs:", data.message);
    }
  },

  deleteBlog: async (bid: string) => {
    // Send DELETE request to delete the blog
    const res = await fetch(`/api/blogs/${bid}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (!data.success) {
      return { success: false, message: data.message || "Failed to delete blog." };
    }

    // Remove the blog from the store
    set((state) => ({
      blogs: state.blogs.filter((blog) => blog._id !== bid),
    }));

    return { success: true, message: data.message || "Blog deleted successfully." };
  },
}));
