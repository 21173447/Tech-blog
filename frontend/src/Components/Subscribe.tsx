import React, { useState, FormEvent } from "react";
import emailjs from "emailjs-com";
import img1 from "../images/53905.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Importing icons from react-icons

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const serviceId = "service_reid616";
    const templateId = "template_4uf3l0s";
    const userId = "lh5bUkZiLpOPPWKzY";

    const templateParams = {
      email: email,
      message: "Thank you for subscribing to Byte Craft Tech Blog!",
    };

    emailjs.send(serviceId, templateId, templateParams, userId).then(
      (result) => {
        console.log(result.text);
        setMessage(
          "Thank you for subscribing! A confirmation email has been sent to your inbox."
        );
      },
      (error) => {
        console.log(error.text);
        setMessage("There was an error sending your email. Please try again.");
      }
    );

    setEmail("");
  };

  return (
    <section className="h-[90vh] bg-opacity-80 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl px-4">
      
        <div className="flex-shrink-0 w-full lg:w-1/2 mb-8 lg:mb-0">
          <img src={img1} alt="Subscribe" className="w-full h-auto" />
        </div>

        <div className="shadow-2xl bg-gray-900 h-auto lg:p-20 sm:p-10 w-full lg:w-1/2">
          <h1 className="text-center text-white text-3xl py-3">SUBSCRIBE</h1>
          <div className="grid place-content-center">
            <hr className="border-[3px] w-20 flex border-white" />
          </div>
          <div className="text-center pt-5 text-white text-lg">
            <h1>Keep me Updated</h1>
            <h1>
              Keep pace with 2024 ByteCraft advancements! Join our mailing list for
              selective, noteworthy updates.
            </h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="grid grid-flow-col gap-0 place-content-center mt-5"
          >
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-72 rounded-l-xl border-none bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="rounded-r-xl bg-gray-600 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              SUBSCRIBE
            </button>
          </form>
          {message && <p className="text-center text-white mt-4">{message}</p>}

     
          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-white text-3xl hover:text-gray-400" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-3xl hover:text-gray-400" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-3xl hover:text-gray-400" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-3xl hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
