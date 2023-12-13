import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./components/productList/ProductList";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./components/addProduct/AddProduct";
import Allproducts from "./components/allProducts/AllProducts";
import { ListOrders } from "./components/listOrders/ListOrders";
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
      {
        path: "/meuspedidos",
        element: <ListOrders />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "allproduct",
        element: <Allproducts />,
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
    ],
  },
]);

export default router;
