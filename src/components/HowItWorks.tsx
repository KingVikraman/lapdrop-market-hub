
const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Browse & Search",
      description: "Find the perfect laptop from our verified sellers using our advanced search and filter options.",
      icon: "🔍"
    },
    {
      step: "2",
      title: "Secure Purchase",
      description: "Make your purchase with confidence. Your payment is held securely until you receive and approve your laptop.",
      icon: "🛡️"
    },
    {
      step: "3",
      title: "Fast Delivery",
      description: "Receive your laptop with detailed condition reports and warranty. Test it thoroughly before confirming.",
      icon: "📦"
    },
    {
      step: "4",
      title: "Rate & Review",
      description: "Share your experience to help other buyers and sellers in our community.",
      icon: "⭐"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">
            Simple, secure, and transparent process for both buyers and sellers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Sell Your Laptop?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our verified seller program and reach thousands of buyers. We handle verification, 
              payment processing, and provide seller protection.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
              Start Selling Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
