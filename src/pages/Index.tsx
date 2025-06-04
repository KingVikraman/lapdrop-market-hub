
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Check, Users, Shield } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">LaptopHub</h1>
              <span className="ml-2 text-sm text-gray-500">Verified Refurbished Laptops</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Browse</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Sell</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">How it Works</a>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Sign In
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Start Selling
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Search Section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search for laptops (e.g., ThinkPad, MacBook, Gaming Laptop...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 text-lg border-2 border-gray-200 focus:border-blue-500"
          />
          <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700">
            Search
          </Button>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Verified Sellers</h3>
              <p className="text-gray-600">All sellers are verified by our team to ensure authentic products</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Check className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Every laptop is tested and comes with detailed condition reports</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-3 rounded-full mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Transactions</h3>
              <p className="text-gray-600">Protected payments with escrow service for peace of mind</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* How It Works */}
      <HowItWorks />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">LaptopHub</h3>
              <p className="text-gray-400">The trusted marketplace for verified refurbished laptops.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Buyers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Browse Laptops</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Buyer Protection</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Sellers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Start Selling</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Seller Verification</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fee Structure</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LaptopHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
