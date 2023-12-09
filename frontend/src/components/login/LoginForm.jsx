import { useContext } from "react";
import "./style.css";
import { ApiContext } from "../../context/Api";
function LoginForm() {
  const { login } = useContext(ApiContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    let values = {
      email: e.target[0].value,
      senha: e.target[1].value,
    };
    login(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="formContainer">
        <div className="inputContainer">
          <label>Email</label>
          <input name="email" type="email" />
        </div>
        <div className="inputContainer">
          <label>Senha</label>
          <input name="password" type="password" />
        </div>
        <button>Entrar</button>
      </form>
    </div>
  );
}
export default LoginForm;
