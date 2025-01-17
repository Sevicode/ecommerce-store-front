import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Product } from "@/interface/interface";

import { Link, useLoaderData } from "react-router";

function Home() {
  const { toast } = useToast();
  const addToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
  };
  const products = useLoaderData() as Product[];
  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-lg transition-shadow"
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
              <CardFooter>
                <Button
                  onClick={() => {
                    addToCart(product);
                    toast({
                      description: "1 product added to your cart",
                    });
                  }}
                >
                  Add to Cart
                </Button>
                <Link
                  to={`/product/${product.id}`}
                  className="text-blue-600 hover:underline"
                >
                  View Details
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
