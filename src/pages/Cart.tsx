import { Button } from "@/components/ui/button";
import { Product } from "@/interface/interface";
import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const handleClear = (): void => {
    localStorage.clear();
    setCart([]);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold">Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="border p-4 my-2">
            <h2>{item.title}</h2>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
      <Button onClick={handleClear}>Delete all items</Button>
      <a href="/checkout" className="bg-green-500 text-white px-4 py-2 rounded">
        Proceed to Checkout
      </a>
    </div>
  );
}

export default Cart;
