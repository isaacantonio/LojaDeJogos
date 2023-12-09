import { useContext, useState } from "react";
import "./style.css";
import { CartContex } from "../../context/CartContext";
import windows from "../../assets/plataformaIcon/windows.png";
import ps from "../../assets/plataformaIcon/ps.png";
import xbox from "../../assets/plataformaIcon/xbox.png";
function ProductCart({ data }) {
  const { removeCartItem } = useContext(CartContex);
  const [product, setProduct] = useState(data);
  const [enter, setEnter] = useState(false);
  return (
    <div
      className="productCartContainer"
      onMouseEnter={() => setEnter(true)}
      onMouseLeave={() => setEnter(false)}
    >
      <div className="productCartTitle">
        <img src={product.image} />
        <div style={{ width: "100%" }}>
          <h1>{product.title}</h1>
          <div className="containerPlataformaIcon">
            {product.plataform.map((value, index) => {
              let icon = windows;
              if (value === "ps") {
                icon = ps;
              }
              if (value === "xbox") {
                icon = xbox;
              }
              return <img key={index} className="pataformaicon" src={icon} />;
            })}
          </div>
        </div>
      </div>
      <div>
        <h3>R$ {product.price}</h3>
        {enter && (
          <span
            style={{
              color: "red",
              textDecoration: "underline",
              cursor: "pointer",
            }}
            onClick={() => removeCartItem(data)}
          >
            Remover
          </span>
        )}
      </div>
    </div>
  );
}
export default ProductCart;
