import { useContext } from "react";
import "./style.css";
import { ApiContext } from "../../context/Api";
import { useNavigate } from "react-router-dom";
import { errorNotification, successNotification } from "../notification";
function ContatoForm() {
  const navigate = useNavigate();
  const { sendEmail } = useContext(ApiContext);
  const handleSubmit = async (e) => {
    e.preventDefault();

    let values = {
      nome: e.target[0].value,
      email: e.target[1].value,
      mensagem: e.target[2].value,
    };
    let response = await sendEmail(values);
    if (response === "success") {
      navigate("/contato");
      successNotification(
        "Email enviado com sucesso!",
        "Obrigado pelo contato!"
      );
    } else {
      errorNotification("Erro ao enviar email!", "Por favor, tente novamente.");
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
          <input name="email" required type="email" />
        </div>
        <div className="inputContainer">
          <label>Mensagem</label>
          <textarea
            name="mensagem"
            style={{ height: "200px" }}
            required
            type="text"
          />
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
}
export default ContatoForm;
