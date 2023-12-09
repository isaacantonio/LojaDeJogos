import { useContext } from "react";
import "./style.css";
import { ApiContext } from "../../context/Api";
function SingUpForm() {
  const { createUser } = useContext(ApiContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    let values = {
      nome: e.target[0].value,
      email: e.target[1].value,
      senha: e.target[2].value,
      roles: ["CLIENTE"],
    };
    createUser(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="formContainer">
        <div className="inputContainer">
          <label>Nome</label>
          <input name="nome" type="text" />
        </div>
        <div className="inputContainer">
          <label>Email</label>
          <input name="email" type="text" />
        </div>
        <div className="inputContainer">
          <label>Senha</label>
          <input name="password" type="password" />
        </div>
        <button>Criar</button>
      </form>
    </div>
  );
}
export default SingUpForm;
