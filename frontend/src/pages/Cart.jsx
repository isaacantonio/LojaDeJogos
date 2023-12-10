import { useContext, useEffect, useState } from "react";
import { CartContex } from "../context/CartContext";
import ProductCart from "../components/productCard/ProductCart";
import { ApiContext } from "../context/Api";
import { ReactNotifications, Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { errorNotification } from "../components/notification";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartStore } = useContext(CartContex);
  const { user } = useContext(ApiContext);
  const navigate = useNavigate();
  let total = 0;
  const handleFinalizeOrder = () => {
    if (user.id !== "") {
      console.log("-==");
    } else {
      errorNotification(
        "Erro ao finalizar pedido",
        "Por favor, faça login para continuar."
      );
    }
  };
  return (
    <div style={{ marginTop: "16px" }}>
      <span style={{ fontSize: "22pt", fontWeight: "bold" }}>Meu Carrinho</span>
      {cartStore.length > 0 ? (
        <div className="productContainer">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #151D27",
              padding: "8px 18px",
            }}
          >
            <span>Produto</span>
            <span>Valor</span>
          </div>
          <div>
            {cartStore.map((value, index) => {
              return <ProductCart key={value + index} data={value} />;
            })}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid #151D27",
              padding: "8px 18px",
            }}
          >
            <span>Total</span>
            <span>
              {cartStore.forEach((element) => {
                let price = element.price.replace(",", ".");
                total += parseFloat(price);
              })}
              R$ {total.toString().replace(".", ",")}
            </span>
          </div>
          <button
            style={{
              width: "100%",
              fontSize: "12pt",
              margin: "8px 18px",
              justifySelf: "end",
              marginLeft: "auto",
              maxWidth: "200px",
            }}
            onClick={handleFinalizeOrder}
          >
            Finalizar pedido
          </button>
        </div>
      ) : (
        <div
          className="productContainer"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <p>Carrinho vazio!</p>
          <button onClick={() => navigate("/")}>
            Voltar para página inicial
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
