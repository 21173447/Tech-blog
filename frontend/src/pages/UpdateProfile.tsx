import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slice/authslice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUpdateUserMutation } from "../slice/usersApiSlice";
import img1 from "../images/file (1).png";

const UpdateProfile: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [userInfo]);

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      setIsSubmitting(false);
      return;
    }

    try {
      const updatedUserInfo = {
        name,
        email,
        password,
        token: userInfo.token,
      };

      const res = await updateUser(updatedUserInfo).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success("Profile updated successfully!");
      navigate("/profile");
    } catch (err) {
      toast.error("Failed to update profile.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex">
     
      <div className="w-1/2 bg-gray-100 flex flex-col items-center justify-center p-8">
        <img className="w-3/4 mb-6" src={img1} alt="Update Illustration" />
        <h1 className="text-2xl p-1 text-gray-900">ByteCraft</h1>
        <h2 className="text-gray-500">Navigating the Digital Age, One Byte at a Time.</h2>
      </div>

  
      <div className="w-1/2 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-2xl text-center mb-6 font-extralight text-gray-900">
            Update Profile
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block mb-2 font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isLoading}
              className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-600 transition disabled:bg-gray-400"
            >
              {isSubmitting || isLoading ? "Updating..." : "Update Profile"}
            </button>
          </form>
          <ToastContainer />
          <div className="mt-4 text-center">
            <Link to="/profile" className="text-blue-500 hover:underline">
              Back to Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
