import React from "react";
import ProductList from "./Components/ProductList";
import ShoppingCart from "./Components/ShoppingCart";
import "./App.css";

const App = () => {
  return (
    <div>
      <h2 className="app-heading">Walmart Super Store</h2>
      <ProductList />
      <ShoppingCart />
    </div>
  );
};

export default App;
