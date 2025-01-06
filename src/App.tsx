import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route index element={<Cart />} />
        <Route index element={<CheckOut />} />
      </Routes>
    </>
  );
}

export default App;
