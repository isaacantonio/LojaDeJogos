import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./style.css";
import windows from "../../assets/plataformaIcon/windows.png";
import ps from "../../assets/plataformaIcon/ps.png";
import xbox from "../../assets/plataformaIcon/xbox.png";
import CheckIcon from "@mui/icons-material/Check";
import { useContext, useState } from "react";
import { CartContex } from "../../context/CartContext";

function ProductCard({ image, price, plataform, title, id, description }) {
  const [cartIcon, setCartIcon] = useState(<AddShoppingCartIcon />);
  const [cartStyleAdd, setCartStyleAdd] = useState({});
  const { saveCartItem } = useContext(CartContex);
  const cartClicked = () => {
    saveCartItem({
      title,
      price,
      plataform,
      id,
      image,
      description,
    });

    setCartIcon(<CheckIcon />);
    setCartStyleAdd({ backgroundColor: "green" });
    setTimeout(() => {
      setCartIcon(<AddShoppingCartIcon />);
      setCartStyleAdd({});
    }, 1000);
  };

  return (
    <div className="productCard">
      <div className="cardImage">
        <img src={`data:image/jpeg;base64,${image}`} />
      </div>
      <div className="descriptionContainer">
        <div>
          <h1 title={title}>{title}</h1>
          <div className="containerPlataformaIcon">
            {plataform.map((value, index) => {
              let icon = windows;
              if (value === "Playstation") {
                icon = ps;
              }
              if (value === "Xbox") {
                icon = xbox;
              }
              return (
                <img
                  key={index + title + id}
                  className="pataformaicon"
                  src={icon}
                />
              );
            })}
          </div>
          <p title={description}>{description}</p>
        </div>
        <button
          className="cartButton"
          onClick={() => cartClicked()}
          style={cartStyleAdd}
        >
          R$ {price} {cartIcon}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
