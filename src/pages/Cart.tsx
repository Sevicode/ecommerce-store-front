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
    localStorage.removeItem("cart");
    setCart([]);
  };

  const handleRemoveItem = (productId: number): void => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const calculateTotal = (): number => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {cart.length > 0 ? (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="border rounded-lg p-4 flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain"
                  />
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="text-green-600 font-medium">${item.price}</p>
                  </div>
                </div>
                <Button
                  variant="destructive"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t pt-4">
            <div className="text-xl font-bold mb-4">
              Total: ${calculateTotal().toFixed(2)}
            </div>
            <div className="flex space-x-4">
              <Button variant="destructive" onClick={handleClear}>
                Clear Cart
              </Button>
              <Button
                variant="default"
                className="bg-green-600 hover:bg-green-700"
                onClick={() => (window.location.href = "/checkout")}
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500 mb-4">Your cart is empty!</p>
          <Button
            variant="default"
            onClick={() => (window.location.href = "/")}
          >
            Continue Shopping
          </Button>
        </div>
      )}
    </div>
  );
}

export default Cart;
