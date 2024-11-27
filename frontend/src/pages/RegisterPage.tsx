import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slice/usersApiSlice";
import { setCredentials } from "../slice/authslice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img1 from "../images/file.png";

const RegisterPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();
  const { userInfo } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

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

    if (!email.match(/\S+@\S+\.\S+/)) {
      setError("Please enter a valid email address.");
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const res = await register({ name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      setSuccess(true);
      toast.success("Registration successful! You can now log in.");
      navigate("/");
    } catch (err: any) {
      toast.error(err?.data?.message || err.error || "Registration failed.");
    }
  };

  return (
    <div className="min-h-screen flex">
    
      <div className="w-1/2 bg-gray-100 flex flex-col items-center justify-center p-8">
        <img className="w-3/4 mb-6" src={img1} alt="Register Illustration" />
        <h1 className="text-2xl p-1 text-gray-900">ByteCraft</h1>
        <h2 className="text-gray-500">
          Navigating the Digital Age, One Byte at a Time.
        </h2>
      </div>


      <div className="w-1/2 flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl text-center mb-6 font-extralight text-gray-900">
         ByteCraft
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
              className="w-96 p-2 border rounded-md"
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
              className="w-96 p-2 border rounded-md"
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
              className="w-96 p-2 border rounded-md"
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
              className="w-96 p-2 border rounded-md"
            />
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && (
            <p className="text-green-500 mb-4">
              Registration successful! You can now log in.
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-600 transition disabled:bg-gray-400"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="mt-4">
          <a
            href="/login"
            className="text-gray-500 hover:text-gray-700 transition"
          >
            Already have an account? Login
          </a>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default RegisterPage;
