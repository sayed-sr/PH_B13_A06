const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started",
      price: "0",
      features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      description: "Best for professionals",
      price: "29",
      features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      description: "For teams and businesses",
      price: "99",
      features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
      buttonText: "Contact Sales",
      isPopular: false,
    }
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 text-center">
        <h2 className="text-5xl font-black text-gray-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mb-16">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-10 rounded-[2.5rem] border transition-all ${
                plan.isPopular 
                ? 'bg-[#8B2CF5] text-white border-transparent shadow-2xl scale-105 z-10' 
                : 'bg-white text-gray-900 border-gray-100 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFEFD2] text-[#B47818] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                  Most Popular
                </span>
              )}

              <div className="text-left mb-8">
                <h4 className="text-2xl font-bold">{plan.name}</h4>
                <p className={`text-sm mt-1 ${plan.isPopular ? 'text-purple-100' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="text-left mb-8">
                <span className="text-5xl font-black">${plan.price}</span>
                <span className={`text-lg ${plan.isPopular ? 'text-purple-200' : 'text-gray-400'}`}>/Month</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                    <svg 
                      className={`w-5 h-5 flex-shrink-0 ${plan.isPopular ? 'text-white' : 'text-green-500'}`} 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.isPopular ? 'text-purple-50' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${
                  plan.isPopular 
                  ? 'bg-white text-[#8B2CF5] hover:bg-gray-50' 
                  : 'bg-[#8B2CF5] text-white hover:bg-purple-700'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;