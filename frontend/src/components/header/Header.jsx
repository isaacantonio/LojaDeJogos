import { useContext } from "react";
import "./style.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContex } from "../../context/CartContext";
import { Link } from "react-router-dom";
function Header() {
  const { cartStore } = useContext(CartContex);
  return (
    <div className="header">
      <Link to={""} style={{ color: "#fff" }}>
        <div>Loja de Jogos</div>
      </Link>
      <div className="login-cart">
        <Link className="loginButton" to={"/login"}>
          <div>Entrar</div>
        </Link>
        <Link className="cartButtonHeader" to={"/cart"}>
          <ShoppingCartIcon />
          <div className="cartCount">{cartStore.length}</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
