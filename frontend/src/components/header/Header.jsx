import { useContext } from "react";
import "./style.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContex } from "../../context/CartContext";
import { Link } from "react-router-dom";
function Header() {
  const { cartStore } = useContext(CartContex);
  console.log(cartStore.length);
  return (
    <div className="header">
      <Link to={""}>
        <div>LOGO</div>
      </Link>
      <div className="login-cart">
        <Link className="loginButton" to={"/login"}>
          <div>Entrar</div>
        </Link>
        <div className="cartButtonHeader">
          <ShoppingCartIcon />
          <div className="cartCount">{cartStore.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
