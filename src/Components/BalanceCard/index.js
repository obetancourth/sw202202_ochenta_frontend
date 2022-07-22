import { toCurrency } from '../../Utilities/Currency';
import './BalanceCard.css';
const BalanceCard = ({ type, documents, amount }) => {
  return (
    <section className={['bcard', type.toLowerCase()].join(' ')}>
      <h2>{type}</h2>
      <h1>{toCurrency(amount)}</h1>
    </section>
  );
}
export default BalanceCard;
