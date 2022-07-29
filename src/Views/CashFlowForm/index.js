import CashFlowFormUx from "./CashFlowFormUx";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postNewCashFlow } from "./CashFlowActions";
import { getCashFlowDocuments } from "../Summary/SummaryActions";
const CashFlowForm = ({ }) => {
  const { type } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { documents: { page, pageLimit } } = useSelector(state => state.cashflow);

  const [formData, setFormData] = useState({
    description: "",
    date: new Date(),
    category: "",
    amount: 0
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "description":
        setFormData({ ...formData, description: value });
        break;
      case "date":
        setFormData({ ...formData, date: new Date(value) });
        break;
      case "category":
        setFormData({ ...formData, category: value });
        break;
      case "amount":
        setFormData({ ...formData, amount: parseFloat(value) });
        break;
      default:
        break;
    }
  }
  const onSubmitClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const ok = await postNewCashFlow(dispatch, { ...formData, type: type.toUpperCase() });
    if (ok) {
      getCashFlowDocuments(dispatch, page, pageLimit);
      navigate("/home");
    }
  }
  const onCancelClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/home");
  }
  return (
    <CashFlowFormUx
      descriptionValue={formData.description}
      typeValue={type.toUpperCase()}
      dateValue={formData.date}
      categoryValue={formData.category}
      amountValue={formData.amount}
      onChangeHandler={onChangeHandler}
      onSubmitClick={onSubmitClick}
      onCancelClick={onCancelClick}
    />
  );
}

export default CashFlowForm;
