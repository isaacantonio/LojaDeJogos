import { useContext } from "react";
import "./style.css";
import { ApiContext } from "../../context/Api";
import { useNavigate } from "react-router-dom";
import { errorNotification, successNotification } from "../notification";
function LoginForm() {
  const navigate = useNavigate();
  const { login } = useContext(ApiContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let values = {
      email: e.target[0].value,
      senha: e.target[1].value,
    };
    let response = await login(values);
    console.log(response);
    if (response === "success") {
      navigate("/");
      successNotification("Login realizado com sucesso!");
    } else {
      errorNotification(
        "Erro ao realizar login!",
        "Por favor, tente novamente."
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="formContainer">
        <div className="inputContainer">
          <label>Email</label>
          <input name="email" required type="email" />
        </div>
        <div className="inputContainer">
          <label>Senha</label>
          <input name="password" required type="password" />
        </div>
        <button>Entrar</button>
      </form>
    </div>
  );
}
export default LoginForm;
