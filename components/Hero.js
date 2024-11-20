const Hero = () => (
    <div className="relative bg-[url('/images/hero-bg.jpg')] bg-cover bg-center h-screen">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold">Empowering Future Biotechnologists</h1>
        <p className="text-gray-300 mt-4 text-center max-w-xl">
          Leading the way in biotechnology education with cutting-edge research and innovation.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 mt-6 rounded hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  );
  
  export default Hero;
  