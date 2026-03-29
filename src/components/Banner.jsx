const Banner = () => (
  <div className="w-full bg-white">
  {/* <header > */}
    <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-32 pb-16 ">
      
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-bold">
          #1 AI Content Toolkit 2026
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
          Supercharge Your <br />
          <span className="text-purple-600">Digital Workflow</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-lg">
          Create premium content, design stunning visuals, and automate your productivity with our suite of professional digital tools.
        </p>
        <div className="flex gap-4">
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-purple-700 transition">
            Explore Products
          </button>
          <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition">
            All Applications
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-end">
        <img 
          src="/assets/banner.png" 
          alt="Hero Banner" 
          className="w-full object-contain" 
        />
      </div>
    </div>
  {/* </header> */}
  </div> 
);

export default Banner;