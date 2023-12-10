import { useContext } from "react";
import "./style.css";
import { ApiContext } from "../../context/Api";
import { useNavigate } from "react-router-dom";
import { errorNotification, successNotification } from "../notification";
function SingUpForm() {
  const navigate = useNavigate();
  const { createUser } = useContext(ApiContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let values = {
      nome: e.target[0].value,
      email: e.target[1].value,
      senha: e.target[2].value,
      roles: ["CLIENTE"],
    };
    let resp = await createUser(values);
    if (resp === "success") {
      successNotification("Conta criada com sucesso!");
      navigate(0);
    } else {
      errorNotification("Erro ao criar conta!", "Por favor, tente novamente.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="formContainer">
        <div className="inputContainer">
          <label>Nome</label>
          <input name="nome" required type="text" />
        </div>
        <div className="inputContainer">
          <label>Email</label>
          <input name="email" type="email" required />
        </div>
        <div className="inputContainer">
          <label>Senha</label>
          <input name="password" required type="password" />
        </div>
        <button>Criar</button>
      </form>
    </div>
  );
}
export default SingUpForm;
