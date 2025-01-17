import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Layout from "./components/Layout";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout for common components
    // errorElement: <NotFound />, // Handles invalid routes
    children: [
      {
        path: "/", // Nested route for Home
        element: <Home />,
        loader: fetchProducts,
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
