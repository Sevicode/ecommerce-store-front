import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
