
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Find Your Perfect
          <span className="text-yellow-300"> Refurbished Laptop</span>
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
          Connect with verified sellers offering high-quality refurbished laptops. 
          Every transaction is protected, every seller is verified, every laptop is guaranteed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
            Start Shopping
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
            Become a Seller
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-yellow-300">500+</div>
            <div className="text-blue-100">Verified Sellers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-300">10,000+</div>
            <div className="text-blue-100">Laptops Sold</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-300">4.8★</div>
            <div className="text-blue-100">Customer Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
