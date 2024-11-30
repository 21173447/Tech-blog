import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { userBlog } from "../store/blog";
import { Link } from "react-router-dom"; 
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const FeaturedBlogs: React.FC = () => {
  const { blogs, fetchBlogs } = userBlog();

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <div className=" mx-auto pt-5">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <SwiperSlide key={blog._id}>
              <div className="relative">
                <Link to={`/blog/${blog._id}`}> 
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-80 object-cover cursor-pointer"
                  />
                </Link>
                <div className="absolute top-5 left-5 text-white p-2 bg-black bg-opacity-50 ">
                  <h3 className="text-xl font-semibold">{blog.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <p className="text-center text-black">No blogs available</p>
          </SwiperSlide>
        )}
      </Swiper>
      <h1 className="text-center text-3xl font-thin text-black flex justify-center mr-[550px] pt-10">
        Subscribe
      </h1>
      <div className="flex justify-center pt-5">
        <hr className="border-[3px] w-[60%] border-black" />
      </div>
    </div>
  );
};

export default FeaturedBlogs;
