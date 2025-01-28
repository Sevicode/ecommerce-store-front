import { useCart } from "@/hooks/CartContext";
import { Link } from "react-router";
import { Menu, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Header() {
  const { cartCount } = useCart();
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const NavigationLinks = () => (
    <div className="space-y-4">
      <SheetClose asChild>
        <Link to="/" className="block hover:text-[#FA812F] transition-colors">
          Home
        </Link>
      </SheetClose>
      {categories.map((category) => (
        <SheetClose asChild key={category}>
          <Link
            to={`/?category=${category}`}
            className="block hover:text-[#FA812F] transition-colors capitalize"
          >
            {category}
          </Link>
        </SheetClose>
      ))}
    </div>
  );

  return (
    <div className="bg-white shadow-sm h-20">
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex items-center justify-between h-full px-6">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link to="/">My Store</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-6 flex-1 justify-center">
            <Link to="/" className="hover:text-[#FA812F] transition-colors">
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                to={`/?category=${category}`}
                className="hover:text-[#FA812F] transition-colors capitalize"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Icons Section */}
          <div className="flex items-center space-x-4">
            {/* Wishlist Icon - Hidden on mobile */}
            <Link
              to="/wishlist"
              className="hidden sm:flex items-center hover:text-[#FA812F] transition-colors"
            >
              <Heart className="h-6 w-6" />
              <span className="sr-only">Wishlist</span>
            </Link>

            {/* User Account Icon - Hidden on mobile */}
            <Link
              to="/account"
              className="hidden sm:flex items-center hover:text-[#FA812F] transition-colors"
            >
              <User className="h-6 w-6" />
              <span className="sr-only">Account</span>
            </Link>

            {/* Cart Icon */}
            <Link to="/cart" className="relative flex items-center">
              <span role="img" aria-label="cart" className="text-2xl">
                🛒
              </span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button - Moved to the end */}
            <div className="sm:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-white">
                  <SheetHeader>
                    <SheetTitle className="text-[#FA812F]">Menu</SheetTitle>
                    <SheetDescription>
                      Browse our categories and more
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <NavigationLinks />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
