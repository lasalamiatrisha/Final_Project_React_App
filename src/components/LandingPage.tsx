import React from 'react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-40 blur-[2px]"
        style={{ 
          backgroundImage: `url('https://i.pinimg.com/1200x/15/46/57/154657e5b8393753a45bdd2f307b2598.jpg')` 
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
        
        {/* Left Column: Title & CTA */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Conference Expense Planner
          </h1>
          <p className="text-xl text-gray-200 font-medium">
            Plan your next major event with us!
          </p>
          <div>
            <button
              onClick={onGetStarted}
              className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Right Column: Company Background & Mission */}
        <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 space-y-4 text-gray-100 text-sm md:text-base leading-relaxed shadow-2xl">
          <p>
            Welcome to <strong>BudgetEase Solutions</strong>, your trusted partner in simplifying budget management and financial solutions. At BudgetEase, we understand the importance of effective budget planning and strive to provide intuitive, user-friendly solutions to meet the diverse needs of our clients.
          </p>
          <p>
            With a commitment to efficiency and innovation, we empower individuals and businesses to take control of their finances and achieve their goals with ease.
          </p>
          <p>
            At BudgetEase Solutions, our mission is to make budgeting effortless and accessible for everyone. Whether you're a small business owner, a busy professional, or an individual looking to manage your personal finances, we offer tailored solutions to streamline your budgeting process.
          </p>
        </div>

      </div>
    </div>
  );
};