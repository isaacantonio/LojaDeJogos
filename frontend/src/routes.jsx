import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./components/productList/ProductList";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./components/addProduct/AddProduct";
import Allproducts from "./components/allProducts/AllProducts";
import { ListOrders } from "./components/listOrders/ListOrders";
import ContatoForm from "./components/contato/ContatoForm";
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
      {
        path: "/sobrenos",
        element: <SobreNos />,
      },
      {
        path: "/contato",
        element: <ContatoForm />,
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

function SobreNos() {
  return (
    <div style={{ width: "60%" }}>
      <h2>Quem somos?</h2>
      <p>
        Nós, João Pedro e Isaac Barbosa, somos estudante do curso de engenharia
        de computação na instituição do IFPB campus Campina Grande na Paraíba
        decidimos fazer uma loja de jogos online onde fornecemos keys para
        ativação nas plataformas: Steam, Playstation Store e Xbox Store.
        Trabalhamos apenas com ativação por keys, não possuimos produtos fisicos
        ou estoque de jogos de mídia fisica.{" "}
      </p>
      <div>
        <div>
          <h3>Email</h3>
          <span>
            João Pedro: <a>joao.correa@academico.ifpb.edu.br</a>
          </span>
          <br />
          <span>
            Isaac Barbosa: <a>isaac.barbosa@academico.ifpb.edu.br</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default router;
