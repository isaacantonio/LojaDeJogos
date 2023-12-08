import { useContext } from "react";
import "./style.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContex } from "../../context/CartContext";
function Header() {
  const { cartStore } = useContext(CartContex);
  console.log(cartStore.length);
  return (
    <div className="header">
      <div>LOGO</div>
      <div className="login-cart">
        <div className="loginButton">Entrar</div>
        <div className="cartButtonHeader">
          <ShoppingCartIcon />
          <div className="cartCount">{cartStore.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
