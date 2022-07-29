import SummaryUx from './SummaryUx';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSummaryData, getCashFlowDocuments } from './SummaryActions';
import ListCashFlow from '../../Components/ListCashFlow';
import Paging from '../../Components/Paging';

const Summary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { summary: { data: summaryData }, documents } = useSelector(state => state.cashflow);
  useEffect(() => {
    getSummaryData(dispatch);
    getCashFlowDocuments(dispatch, documents.page, documents.pageLimit);
  },
    []);
  const onSummaryClick = (type) => {
    navigate(`/add/${type.toLowerCase()}`);
  }
  const Pager = () => {
    if (documents.totalPages > 1) {
      return (<Paging currentPage={documents.page}
        totalPages={documents.totalPages}
        pageLimit={documents.pageLimit}
        onPageChange={(page) => getCashFlowDocuments(dispatch, page, documents.pageLimit)}
        onLimitChange={(e) => getCashFlowDocuments(dispatch, documents.page, e.target.value)}>
      </Paging>
      )
    }
    return null;
  }
  return (
    <SummaryUx summaryData={summaryData} onClickHandler={onSummaryClick}>
      <Pager />
      <ListCashFlow documents={documents.cashFlows}></ListCashFlow>
      <Pager />
    </SummaryUx>
  )
}

export default Summary;
