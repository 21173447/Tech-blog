import React from "react";
import { Link } from "react-router-dom";
import img3 from "../images/Wavy_Tech-07_Single-01.png";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-200 flex min-h-screen items-center justify-center p-8">
      <div className="mr-8">
        <img className="w-full max-w-lg" src={img3} alt="Tech illustration" />
      </div>
      <div className="text-lg text-gray-800 max-w-2xl ">
        <p className="text-3xl font-thin">
          Tech blogs deliver the latest news, reviews, and insights on all
          things tech—helping you stay ahead in the ever-evolving world of
          gadgets, software, and trends.
        </p>
        
        <div className="mt-5">
        <Link to="/homepage">
          <button className="bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:bg-gray-800">
            Continue Reading
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
