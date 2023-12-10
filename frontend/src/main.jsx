import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CartProvider } from "./context/CartContext.jsx";
import { ApiProvider } from "./context/Api.jsx";
import { ReactNotifications } from "react-notifications-component";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider>
      <CartProvider>
        <ReactNotifications />
        <App />
      </CartProvider>
    </ApiProvider>
  </React.StrictMode>
);
