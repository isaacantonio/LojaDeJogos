import { useContext, useEffect, useState } from "react";
import { CartContex } from "../context/CartContext";
import ProductCart from "../components/productCard/ProductCart";

function Cart() {
  const { cartStore } = useContext(CartContex);
  let total = 0;
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
              padding: "8px",
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
              padding: "8px",
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
              margin: "6px",
              justifySelf: "end",
              marginLeft: "auto",
              maxWidth: "200px",
            }}
          >
            Finalizar pedido
          </button>
        </div>
      ) : (
        <div
          className="productContainer"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          Carrinho vazio!
        </div>
      )}
    </div>
  );
}

export default Cart;
