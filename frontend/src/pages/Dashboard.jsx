import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/Api";
import { Navigate, useNavigate } from "react-router-dom";
import AddProduct from "../components/addProduct/AddProduct";

const styleActive = {
  background: "#404b58",
  fontWeigth: "bold",
  borderRadius: "6px",
};

function Dashboard() {
  const [optionSelected, setOptionSelected] = useState(false);
  const navigate = useNavigate();
  var user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    user = JSON.parse(localStorage.getItem("user"));
  }, []);

  const handleClick = (value) => {
    setOptionSelected(value);
  };

  return user.papel === "ADMINISTRADOR" ? (
    <div className="dashboardContainer">
      <div className="dashboardMenu">
        <div
          style={!optionSelected ? styleActive : {}}
          onClick={() => handleClick(false)}
        >
          Todos os produtos
        </div>
        <div
          style={optionSelected ? styleActive : {}}
          onClick={() => handleClick(true)}
        >
          Adicionar produtos
        </div>
      </div>
      {!optionSelected ? <div>tabela de produtos</div> : <AddProduct />}
    </div>
  ) : (
    <Navigate to={"/"} />
  );
}
export default Dashboard;
