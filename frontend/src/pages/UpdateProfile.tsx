import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slice/authslice"; 
import { toast } from "react-toastify";
import { useUpdateUserMutation } from "../slice/usersApiSlice"; 

const UpdateProfile: React.FC = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
  
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      toast.error("Please fill in all fields.");
      return;
    }
  
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      toast.error("Passwords do not match.");
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

      setSuccess(true);
      toast.success("Profile updated successfully!");
      navigate("/profile"); 
    } catch (err) {
      setError("Failed to update profile.");
      toast.error("Failed to update profile.");
      console.error("Error updating profile:", err);
    }
  };
  
  return (
    <div className="">
      <div className="">
        <h2 className="">
          Update Profile
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">Profile updated successfully!</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className=""
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className=""
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className=""
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className=""
              required
            />
          </div>

          <button
            type="submit"
            className=""
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Profile"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link to="/profile" className="text-blue-500">
            Back to Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;