import { useEffect, useState } from "react";
import { Link } from "react-router";

function Header() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);
  }, []);

  return (
    <div className="flex items-center justify-between p-4 ">
      <div className="text-xl font-bold">
        <Link to="/">My Store</Link>
      </div>

      <div className="flex-1"></div>

      <Link to="/cart" className="relative flex items-center">
        <span role="img" aria-label="cart" className="text-2xl">
          🛒
        </span>
        {cartCount > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>
    </div>
  );
}

export default Header;
