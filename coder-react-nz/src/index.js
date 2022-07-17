import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import bootstrap from "bootstrap";
import { BrowserRouter } from "react-router-dom";
import CartProvider, { CartContext } from "./CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
