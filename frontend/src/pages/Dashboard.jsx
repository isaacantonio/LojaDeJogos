import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";

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
    if (document.URL.includes("addproduct")) {
      setOptionSelected(true);
    }
  }, []);

  const handleClick = (value) => {
    if (value) {
      navigate("addproduct");
    } else {
      navigate("allproduct");
    }
    setOptionSelected(value);
  };

  return user !== null && user.papel === "ADMINISTRADOR" ? (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "auto",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "60px 1fr",
      }}
    >
      <Header />
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
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to={"/"} />
  );
}
export default Dashboard;
