import BalanceCard from "../../Components/BalanceCard";
import Page from "../../Components/Page";

const SummaryUx = ({ summaryData }) => {
  const summaryComponents = summaryData.map(
    (o) => {
      return (
        <BalanceCard
          key={o._id}
          type={o._id}
          documents={o.count}
          amount={o.amount} />
      )
    }
  );

  return (
    <Page pageTitle="Ochenta CashFlow">
      <section>
        {summaryComponents}
      </section>
    </Page>
  )
}

export default SummaryUx;
