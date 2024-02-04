import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import ProductPage from "./pages/product-page";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
