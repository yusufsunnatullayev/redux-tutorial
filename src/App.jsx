import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import Basket from "./pages/basket/Basket";
import Cars from "./pages/cars/Cars";
import CarDetail from "./pages/cars/CarDetail";

function App() {
  const basket = useSelector((state) => state.basket.basket);
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(basket));
  }, [basket]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/car-detail/:id" element={<CarDetail />} />
      </Routes>
    </>
  );
}

export default App;
