
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const featuredLaptops = [
    {
      id: 1,
      title: "ThinkPad X1 Carbon Gen 9",
      brand: "Lenovo",
      price: 899,
      originalPrice: 1299,
      condition: "Excellent",
      image: "/placeholder.svg",
      specs: {
        processor: "Intel i7-1165G7",
        ram: "16GB",
        storage: "512GB SSD",
        screen: "14\" FHD"
      },
      seller: {
        name: "TechRefurb Pro",
        verified: true,
        rating: 4.9
      }
    },
    {
      id: 2,
      title: "MacBook Air M1",
      brand: "Apple",
      price: 749,
      originalPrice: 999,
      condition: "Very Good",
      image: "/placeholder.svg",
      specs: {
        processor: "Apple M1",
        ram: "8GB",
        storage: "256GB SSD",
        screen: "13.3\" Retina"
      },
      seller: {
        name: "Apple Certified Reseller",
        verified: true,
        rating: 4.8
      }
    },
    {
      id: 3,
      title: "Dell XPS 13 9310",
      brand: "Dell",
      price: 679,
      originalPrice: 1099,
      condition: "Good",
      image: "/placeholder.svg",
      specs: {
        processor: "Intel i5-1135G7",
        ram: "8GB",
        storage: "256GB SSD",
        screen: "13.4\" FHD+"
      },
      seller: {
        name: "Dell Direct Refurb",
        verified: true,
        rating: 4.7
      }
    },
    {
      id: 4,
      title: "HP Pavilion Gaming 15",
      brand: "HP",
      price: 549,
      originalPrice: 799,
      condition: "Very Good",
      image: "/placeholder.svg",
      specs: {
        processor: "AMD Ryzen 5 4600H",
        ram: "8GB",
        storage: "512GB SSD",
        screen: "15.6\" FHD"
      },
      seller: {
        name: "Gaming Laptops Plus",
        verified: true,
        rating: 4.6
      }
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Laptops</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked deals from our most trusted sellers. All laptops come with detailed condition reports and warranty.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredLaptops.map((laptop) => (
            <ProductCard key={laptop.id} laptop={laptop} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            View All Laptops
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
