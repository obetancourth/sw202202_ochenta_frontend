import SummaryUx from './SummaryUx';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSummaryData, clearSummaryError } from './SummaryActions';

const Summary = () => {
  const dispatch = useDispatch();
  const summaryData = useSelector(state => state.cashflow.summary.data);
  useEffect(() => {
    getSummaryData(dispatch);
  }
    ,
    []);
  return (
    <SummaryUx
      summaryData={summaryData}
    />
  )
}

export default Summary;
