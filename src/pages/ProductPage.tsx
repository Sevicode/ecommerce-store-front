import React from "react";
import { useLoaderData } from "react-router";
import { Product } from "@/interface/interface";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductPage: React.FC = () => {
  const product = useLoaderData() as Product;

  return (
    <div className="p-6">
      <Card className="max-w-4xl mx-auto shadow-lg border-[#FAB12F]">
        <CardHeader className="p-0">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-80 object-contain rounded-t-md"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-3xl font-bold">{product.title}</CardTitle>
          <CardDescription className="mt-2 text-gray-600">
            {product.description}
          </CardDescription>
          <p className="text-lg font-semibold text-gray-800 mt-4">
            Price: ${product.price.toFixed(2)}
          </p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button className="mt-4 bg-[#FA812F] text-white">Add to Cart</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductPage;
