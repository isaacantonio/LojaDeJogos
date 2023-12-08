import { useState } from "react";
import LoginForm from "../components/login/LoginForm";
import SingUpForm from "../components/registrar/SingupForm";

function Login() {
  const [option, setOption] = useState("entrar");
  const selectedStyle = {
    opacity: 1,
    borderBottom: "2px solid #e7123d",
    fontWeight: "bold",
  };
  return (
    <div className="loginContainer">
      <div className="optionLoginContainer">
        <span
          style={option === "entrar" ? selectedStyle : {}}
          onClick={() => setOption("entrar")}
        >
          Entrar
        </span>
        <span
          style={option === "registrar" ? selectedStyle : {}}
          onClick={() => setOption("registrar")}
        >
          Criar minha conta
        </span>
      </div>
      {option === "entrar" ? <LoginForm /> : <SingUpForm />}
    </div>
  );
}
export default Login;
