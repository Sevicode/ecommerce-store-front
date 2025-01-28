import { Link } from "react-router";

function Footer() {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <footer className="bg-[#FA812F] border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Store Info */}
          <div>
            <h3 className="text-3xl text-white font-bold mb-4">My Store</h3>
            <p className="text-white mb-4">
              Your one-stop shop for all your shopping needs. We offer quality
              products at competitive prices.
            </p>
            <p className="text-gray-600">
              © {new Date().getFullYear()} My Store. All rights reserved.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    to={`/?category=${category}`}
                    className="text-white hover:text-gray-600 transition-colors capitalize"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-white">
              <li>Email: info@mystore.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Shopping Street</li>
              <li>City, Country</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a
                href="#"
                className="text-gray-800 hover:text-[#FEF3E2] transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-[#FEF3E2] transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-[#FEF3E2] transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
