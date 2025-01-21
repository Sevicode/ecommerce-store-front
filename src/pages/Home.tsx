import React, { useState } from "react";
import { useLoaderData, Link } from "react-router";
import { Product } from "@/interface/interface";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Home: React.FC = () => {
  const products = useLoaderData() as Product[];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const isProductInCart = existingCart.some(
      (item: Product) => item.id === product.id
    );

    if (!isProductInCart) {
      const updatedCart = [...existingCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert("Product added to cart successfully!");
    } else {
      alert("This product is already in your cart!");
    }
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* Landing Section */}
        <div
          className="relative bg-cover bg-center h-[350px] rounded-lg shadow-lg overflow-hidden mb-6"
          style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
            <p className="text-lg mb-6">
              Discover the best products tailored just for you!
            </p>
          </div>
        </div>

        {/* Category Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="mb-6">
              {selectedCategory ? selectedCategory : "Select Category"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {categories.map((category) => (
              <DropdownMenuItem
                key={category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem onClick={() => setSelectedCategory(null)}>
              All Categories
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-lg transition-shadow flex flex-col justify-between h-full"
            >
              <div>
                <CardHeader>
                  <CardTitle className="text-lg font-bold">
                    {product.title}
                  </CardTitle>
                  <CardDescription>${product.price}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-40 object-contain"
                  />
                </CardContent>
              </div>
              <CardFooter className="flex justify-between items-center">
                <Link to={`/product/${product.id}`}>
                  <Button variant="link" className="text-blue-600">
                    View Details
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="text-green-600"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
