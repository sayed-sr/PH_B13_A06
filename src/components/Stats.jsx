const Stats = () => (
  <section className="w-full bg-purple-600 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
    <div><h3 className="text-4xl font-black">50K+</h3><p className="opacity-80">Active Users</p></div>
    <div className="border-y md:border-y-0 md:border-x border-purple-400 py-4 md:py-0">
      <h3 className="text-4xl font-black">200+</h3><p className="opacity-80">Premium Tools</p>
    </div>
    <div><h3 className="text-4xl font-black">4.9</h3><p className="opacity-80">Rating</p></div>
  </section>
);
export default Stats;