import Page from "../../Components/Page";

const Login = () => {
  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle="Login"
    >
      <form>
        <fieldset>
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" value="" />
        </fieldset>
        <fieldset>
          <label htmlFor="">Contraseña</label>
          <input type="password" name="" id="" value="" />
        </fieldset>
        <button>Iniciar Sesión</button>
        <button>Crear Cuenta</button>
      </form>
    </Page>
  );
}
export default Login;
