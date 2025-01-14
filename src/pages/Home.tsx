import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useProducts from "@/hooks/useProducts";
import { Product } from "@/interface/interface";

function Home() {
  const products = useProducts();

  const addToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
  };

  return (
    <div className="grid lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
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
          <CardFooter className="flex justify-center mt-auto">
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Home;
