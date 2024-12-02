import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slice/usersApiSlice";
import { setCredentials } from "../slice/authslice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img1 from "../images/file.png";

interface LoginError {
  data?: {
    message?: string;
  };
  error?: string;
}

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state: any) => state.auth);

  useEffect(() => {
   
    if (userInfo) {
      if (userInfo.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/homepage"); 
      }
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));

      if (res.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/homepage");
      }
    } catch (err) {
      const error = err as LoginError;
      toast.error(error?.data?.message || error?.error || "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-gray-100 flex flex-col items-center justify-center p-8">
        <img className="w-3/4 mb-6" src={img1} alt="Login Illustration" />
        <h1 className="text-2xl p-1 text-gray-900">ByteCraft</h1>
        <h2 className="text-gray-500">Navigating the Digital Age, One Byte at a Time.</h2>
      </div>

      <div className="w-1/2 flex flex-col items-center justify-center p-8">
        <div className="">
          <h1 className="text-2xl text-center mb-6 font-extralight text-gray-900">SIGN-IN</h1>
          <form onSubmit={handleSubmit}>
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

            <div className="mb-6">
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

            <button
              type="submit"
              disabled={isSubmitting || isLoading}
              className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-600 transition disabled:bg-gray-400"
            >
              {isSubmitting || isLoading ? "Signing in..." : "SIGN IN"}
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
