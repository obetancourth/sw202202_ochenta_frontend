import Page from "../../Components/Page";
import { Field } from '../../Components/InputField';
import ActionField from '../../Components/ActionField';
import ErrorField from "../../Components/ErrorField";

const LoginInUx = ({
  emailValue = "",
  passwordValue = "",
  error = "",
  onChangeHandler = () => { },
  onSignInClick = () => { },
  onLoginClick = () => { }
}) => {
  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle="Iniciar Sesión"
    >
      <form style={{ minWidth: "380px", maxWidth: "640px" }}>
        <Field
          name="email"
          labelText="Correo Electrónico"
          type="email"
          value={emailValue}
          onChange={onChangeHandler}
        />
        <Field
          name="password"
          labelText="Contraseña"
          type="password"
          value={passwordValue}
          onChange={onChangeHandler}
        />
        <ActionField>
          <button onClick={onLoginClick}>Iniciar Cuenta</button>
          <button onClick={onSignInClick}>Crear Cuenta</button>
        </ActionField>
        {error && <ErrorField>{error}</ErrorField>}
      </form>
    </Page>
  );
}
export default LoginInUx;
