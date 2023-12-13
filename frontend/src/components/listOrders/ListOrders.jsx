import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../context/Api";
import "./style.css";

export function ListOrders() {
  const [orders, setOrders] = useState([]);
  const { getOrderById } = useContext(ApiContext);
  const getOrders = async () => {
    let user = JSON.parse(localStorage.getItem("user"));
    let resp = await getOrderById(user.id);
    if (resp !== "error") {
      setOrders(resp);
    }
  };
  useEffect(() => {
    getOrders();
  }, []);
  return (
    <div className="orderContainer">
      {orders.length > 0 ? (
        orders.map((value) => {
          return (
            <div key={value.id} className="orderValuesContainer">
              <div className="orderValues">
                <h4>Id</h4>
                <p>{value.id}</p>
              </div>
              <div className="orderValues">
                <h4>Status</h4>
                <p>{value.status}</p>
              </div>
              <div className="orderValues">
                <h4>Valor</h4>
                <p>R$ {value.valorTotal}</p>
              </div>
            </div>
          );
        })
      ) : (
        <div>Sem Pedidos</div>
      )}
    </div>
  );
}
