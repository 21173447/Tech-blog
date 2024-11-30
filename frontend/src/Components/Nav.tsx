import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slice/usersApiSlice";
import { logout } from "../slice/authslice";
import { useNavigate } from "react-router-dom";
import img2 from "../images/LOGO2.png";
import { FaPenToSquare } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { RiTextBlock } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";

const Nav: React.FC = () => {
 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { userInfo } = useSelector((state: any) => state.auth);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const logoutHandler = async () => {
    try {
      await logoutApiCall();
      dispatch(logout());
      navigate("/login");
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Logout failed:", err.message);
      } else {
        console.error("An unexpected error occurred during logout");
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 p-4 shadow-md z-30">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-4">

      <Link to="/" className="flex items-center">
        <img className="w-12 h-12" src={img2} alt="Logo" />
      </Link>

      <div className="flex items-center ">
        {userInfo ? (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="text-white mr-40 hover:text-gray-500 transition "
            >
              {userInfo.name}
            </button>
  
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg  overflow-hidden">
                <div className="p-2">
                  <Link
                    to="/create"
                    className="flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition py-2 px-3"
                    onClick={closeDropdown}
                  >
                    Write <FaPenToSquare className="ml-3" />
                    
                  </Link>
                  <hr className="border-[1px] w-[100%] " />
                  <Link
                    to="/profile"
                    className="flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition py-2 px-3"
                    onClick={closeDropdown}
                  >
                    Profile <CgProfile className="ml-3" />
                  </Link>
                  <hr className="border-[1px] w-[100%] " />
                  <Link
                    to="/Manageblogs"
                    className="flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition py-2 px-3"
                    onClick={closeDropdown}
                  >
                    Blogs <RiTextBlock className="ml-3" />
                  </Link>
                  <hr className="border-[1px] w-[100%] " />
                  <button
                    className="flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition w-full py-2 px-3 text-left"
                    onClick={() => {
                      closeDropdown();
                      logoutHandler();
                    }}
                  >
                    Logout <TbLogout2 className="ml-3" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="text-white hover:text-gray-600 transition "
            >
              SIGN IN
            </Link>
            <Link
              to="/signup"
              className="text-white  hover:text-gray-600 transition "
            >
              SIGN UP
            </Link>
          </>
        )}
       
      </div>
    </div>
  </nav>
  
  );
};

export default Nav;
