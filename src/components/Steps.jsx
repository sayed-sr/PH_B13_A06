const Steps = () => {
  const stepsData = [
    { id: '01', title: 'Create Account', icon: '/assets/user.png', desc: 'Sign up for free in seconds. No credit card required.' },
    { id: '02', title: 'Choose Products', icon: '/assets/package.png', desc: 'Browse our catalog and select tools that fit your needs.' },
    { id: '03', title: 'Start Creating', icon: '/assets/rocket.png', desc: 'Download and start using your tools immediately.' }
  ];

  return (
    <section className="w-full py-24 px-6 md:px-20 bg-white text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Get Started In 3 Steps</h2>
        <p className="text-gray-500 mb-16">Start using premium digital tools in minutes, not hours.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stepsData.map((step) => (
            <div key={step.id} className="relative p-10 rounded-3xl border border-gray-50 hover:bg-gray-50 transition group">
              <span className="absolute top-6 right-6 bg-purple-600 text-white w-7 h-7 flex items-center justify-center rounded-full text-xs font-bold">
                {step.id}
              </span>
              <div className="bg-purple-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition">
                <img src={step.icon} className="w-12 h-12" alt={step.title} />
              </div>
              <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
              <p className="text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;