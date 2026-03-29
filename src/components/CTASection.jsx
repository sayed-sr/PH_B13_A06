const CTASection = () => {
  return (
    <section className="w-full bg-purple-600 py-24 px-6 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-100 mb-12 text-lg">
          Join thousands of professionals already using DigiTools to supercharge their productivity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-12 py-4 rounded-full font-black shadow-xl hover:bg-gray-100 transition">
            Explore Products
          </button>
          <button className="border-2 border-purple-300 px-12 py-4 rounded-full font-black hover:bg-purple-700 transition">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;