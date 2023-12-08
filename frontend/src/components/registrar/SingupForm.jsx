import "./style.css";
function SingUpForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    let values = {
      nome: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };

    console.log(values);
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
