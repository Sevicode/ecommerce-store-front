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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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

  const carouselItems = [
    {
      image: "/src/assets/images/landing-img.jpg",
      title: "Welcome to My Store",
      description: "Discover the best products tailored just for you!",
      alt: "Image by Pexels from Pixabay showing a modern shopping environment",
    },
    {
      image: "/src/assets/images/landing-img2.jpg",
      title: "New Arrivals",
      description: "Check out our latest collection",
      alt: "Image by Orna from Pixabay",
    },
    {
      image: "/src/assets/images/landing-img3.jpg",
      title: "Special Offers",
      description: "Get amazing deals on selected items",
      alt: "Image by Pexels from Pixabay showing a rack of clothes",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000, // 5 seconds
              stopOnInteraction: true, // stops autoplay when user interacts
            }),
          ]}
          className="mb-6"
        >
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
                    <p className="text-lg mb-6">{item.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
        <div className="flex justify-end m-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="mb-6 border-[#FA812F] text-[#FA812F] hover:bg-[#FA812F] hover:text-white"
              >
                {selectedCategory ? selectedCategory : "Select Category"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-[#FA812F] min-w-[150px] shadow-md z-50">
              <DropdownMenuItem
                onClick={() => setSelectedCategory(null)}
                className="hover:bg-[#FA812F] hover:text-white cursor-pointer"
              >
                All Categories
              </DropdownMenuItem>
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="hover:bg-[#FA812F] hover:text-white cursor-pointer"
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-lg transition-shadow flex flex-col justify-between h-full "
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
                  className="text-gray-600 border-[#FA812F]"
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
