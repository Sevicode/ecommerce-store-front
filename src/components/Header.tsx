import { useCart } from "@/hooks/CartContext";
import { Link } from "react-router";
import { Menu } from "lucide-react";
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
        <div className="grid grid-cols-12 items-center h-full px-6">
          {/* Logo */}
          <div className="col-span-2 text-xl font-bold">
            <Link to="/">My Store</Link>
          </div>

          {/* Desktop/Tablet Navigation - Centered */}
          <div className="hidden sm:flex col-span-8 items-center justify-center">
            <div className="flex items-center space-x-6">
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
          </div>

          {/* Cart Icon */}
          <div className="col-span-2 flex justify-end">
            {/* Mobile Menu Button */}
            <div className="sm:hidden flex items-center mr-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
