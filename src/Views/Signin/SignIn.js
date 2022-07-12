import Page from "../../Components/Page";

const SignInUx = ({
  onSignInClick = () => { },
  onLoginClick = () => { }
}) => {
  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle="Crear Cuenta"
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
        <button onClick={onSignInClick}>Crear Cuenta</button>
        <button onClick={onLoginClick}>Ya cuento con una Cuenta</button>
      </form>
    </Page>
  );
}
export default SignInUx;
