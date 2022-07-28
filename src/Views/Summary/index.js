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
    navigate(`/add/${type}`);
  }
  return (
    <SummaryUx summaryData={summaryData} onClickHandler={onSummaryClick}>
      <ListCashFlow documents={documents.cashFlows}></ListCashFlow>
      {
        documents.totalPages > 1 && <Paging currentPage={documents.page}
          totalPages={documents.totalPages}
          pageLimit={documents.pageLimit}
          onPageChange={(page) => getCashFlowDocuments(dispatch, page, documents.pageLimit)}
          onLimitChange={(e) => getCashFlowDocuments(dispatch, documents.page, e.target.value)}>
        </Paging>
      }
    </SummaryUx>
  )
}

export default Summary;
