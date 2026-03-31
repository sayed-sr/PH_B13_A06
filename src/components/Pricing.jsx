import React from "react";
import "./Pricing.css";

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
    <section className="pricing-section">
      <div className="pricing-inner">
        <h2 className="pricing-title">Simple, Transparent Pricing</h2>

        
        <p className="pricing-description">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>

              
              {plan.isPopular && (
                <span className="popular-badge">Most Popular</span>
              )}

              <div className="plan-header">

                
                <h4 className="plan-name">{plan.name}</h4>
                <p className={`plan-desc ${plan.isPopular ? 'popular-text' : ''}`}>{plan.description}</p>
              </div>

              <div className="plan-price">
                <span className="price">${plan.price}</span>

                
                <span className={`price-period ${plan.isPopular ? 'popular-text' : ''}`}>/Month</span>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="plan-feature">

                    
                    <svg 
                      className={`feature-icon ${plan.isPopular ? 'popular-icon' : ''}`} 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >

                      
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`feature-text ${plan.isPopular ? 'popular-text' : ''}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              

              <button className={`plan-btn ${plan.isPopular ? 'btn-popular' : 'btn-default'}`}>

                
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