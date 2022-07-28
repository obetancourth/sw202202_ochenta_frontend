import BalanceCard from "../../Components/BalanceCard";
import Page from "../../Components/Page";

const SummaryUx = ({ summaryData, onClickHandler, children }) => {
  const summaryComponents = summaryData.map(
    (o) => {
      return (
        <BalanceCard
          key={o._id}
          type={o._id}
          documents={o.count}
          amount={o.amount}
          onClicked={() => onClickHandler(o._id)}
        />
      )
    }
  );

  return (
    <Page pageTitle="Ochenta CashFlow">
      <section>
        {summaryComponents}
      </section>
      {children}
    </Page>
  )
}

export default SummaryUx;
