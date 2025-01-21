import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Layout from "./components/Layout";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound"; // Add a custom NotFound component
import ErrorBoundary from "./components/ErrorBoundary"; // Add a custom ErrorBoundary component
import { CartProvider } from "./hooks/CartContext";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

const fetchProductById = async ({ params }: { params: { id?: string } }) => {
  if (!params.id) {
    throw new Error("Product ID is missing");
  }

  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />, // Use ErrorBoundary for errors in this route
    children: [
      {
        path: "/",
        element: <Home />,
        loader: fetchProducts,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
        loader: fetchProductById,
        errorElement: <ErrorBoundary />, // Handle errors in ProductPage
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
    ],
  },
  {
    path: "*", // Catch-all for undefined routes
    element: <NotFound />,
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
