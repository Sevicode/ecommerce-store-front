import React, { useState } from "react";
import { useLoaderData } from "react-router";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Product } from "@/interface/interface";

function Home() {
  const products = useLoaderData() as Product[];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories from the products
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Products</h1>

        {/* Dropdown for categories */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {selectedCategory
                ? `Category: ${selectedCategory}`
                : "Select Category"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSelectedCategory(null)}>
              All Categories
            </DropdownMenuItem>
            {categories.map((category) => (
              <DropdownMenuItem
                key={category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <img
                src={product.image}
                alt={product.title || "Product image"}
                className="w-full h-40 object-cover rounded-t-md"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-semibold">
                {product.title}
              </CardTitle>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <a
                href={`/product/${product.id}`}
                className="text-blue-600 hover:underline"
              >
                View Details
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Home;
