import "./style.css";
function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    let values = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    console.log(values);
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
