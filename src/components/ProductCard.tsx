
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface Laptop {
  id: number;
  title: string;
  brand: string;
  price: number;
  originalPrice: number;
  condition: string;
  image: string;
  specs: {
    processor: string;
    ram: string;
    storage: string;
    screen: string;
  };
  seller: {
    name: string;
    verified: boolean;
    rating: number;
  };
}

interface ProductCardProps {
  laptop: Laptop;
}

const ProductCard = ({ laptop }: ProductCardProps) => {
  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "Excellent":
        return "bg-green-100 text-green-800";
      case "Very Good":
        return "bg-blue-100 text-blue-800";
      case "Good":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const discountPercentage = Math.round(((laptop.originalPrice - laptop.price) / laptop.originalPrice) * 100);

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={laptop.image}
            alt={laptop.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <Badge className={`${getConditionColor(laptop.condition)} font-medium`}>
              {laptop.condition}
            </Badge>
          </div>
          <div className="absolute top-3 right-3">
            <Badge className="bg-red-500 text-white font-bold">
              -{discountPercentage}%
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-1">{laptop.title}</h3>
          <p className="text-sm text-gray-500">{laptop.brand}</p>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl font-bold text-gray-900">${laptop.price}</span>
          <span className="text-lg text-gray-400 line-through">${laptop.originalPrice}</span>
        </div>

        <div className="space-y-1 text-xs text-gray-600 mb-4">
          <div className="grid grid-cols-2 gap-1">
            <span>CPU: {laptop.specs.processor}</span>
            <span>RAM: {laptop.specs.ram}</span>
            <span>Storage: {laptop.specs.storage}</span>
            <span>Screen: {laptop.specs.screen}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            {laptop.seller.verified && (
              <Check className="h-4 w-4 text-green-500" />
            )}
            <span className="text-gray-600">{laptop.seller.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            <span className="text-gray-600">{laptop.seller.rating}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
