import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./components/productList/ProductList";
import Cart from "./pages/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "",
        element: <ProductList />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
