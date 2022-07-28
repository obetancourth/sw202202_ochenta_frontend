import Page from "../../Components/Page";
import { Field } from '../../Components/InputField';
import ActionField from '../../Components/ActionField';
import ErrorField from "../../Components/ErrorField";

const CashFlowFormUx = ({
  descriptionValue = "",
  typeValue = "",
  dateValue = new Date(),
  categoryValue = "",
  amountValue = 0,
  error = "",
  onChangeHandler = () => { },
  onSubmitClick = () => { },
  onCancelClick = () => { }
}) => {
  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle={`Add Cash Flow ${typeValue}`}
    >
      <form style={{ minWidth: "380px", maxWidth: "640px" }}>
        <Field
          name="description"
          labelText="Descripción"
          type="text"
          value={descriptionValue}
          onChange={onChangeHandler}
        />
        <Field
          name="category"
          labelText="Categoría"
          type="text"
          value={categoryValue}
          onChange={onChangeHandler}
        />
        <Field
          name="date"
          labelText="Fecha"
          type="date"
          value={dateValue.toISOString().substring(0, 10)}
          onChange={onChangeHandler}
        />
        <Field
          name="amount"
          labelText="Monto"
          type="number"
          value={amountValue}
          onChange={onChangeHandler}
        />
        <ActionField>
          <button onClick={onSubmitClick}>Guardar</button>
          <button onClick={onCancelClick}>Cancelar</button>
        </ActionField>
        {error && <ErrorField>{error}</ErrorField>}
      </form>
    </Page>
  );
}
export default CashFlowFormUx;
