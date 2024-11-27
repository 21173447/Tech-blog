import hero2 from '../assets/hero2.jpg';

const Hero = () => {
  return (
    <div className="relative w-full h-[800px] overflow-hidden">
      <img
        src={hero2}
        alt="Hero"
        className="absolute top-0 left-0 w-full h-full object-cover filter "
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg md:text-xl">
          Welcome to our website, where endless opportunities await. Explore a world of creativity, innovation, and collaboration, designed to inspire and empower. Discover new ideas, connect with like-minded individuals, and unlock your full potential. Join us as we embark on a journey to shape the future together.
        </p>
      </div>
    </div>
  );
}

export default Hero;
