import {
  CASHFLOW_LOAD,
  SUMMARY_CLEAR_ERROR,
  SUMMARY_FAILED,
  SUMMARY_LOAD,
  SUMMARY_SUCCESS,
  CASHFLOW_SUCCESS,
  CASHFLOW_FAILED,
  CASHFLOW_CLEAR_ERROR,
  CASHFLOW_PAGE_CHANGE,
  CASHFLOW_LIMIT_CHANGE
} from "../../../Views/Summary/SummaryActions";

const defaultValue = {
  documents: {
    total: 0,
    page: 1,
    pageLimit: 50,
    totalPages: 0,
    cashFlows: []
  },
  documentsIsLoading: false,
  documentError: null,
  filterOptions: {
    startDate: new Date() - 10,
    endDate: new Date()
  },
  summary: {
    isLoading: false,
    data: [],
    error: null
  },
}

const reducer = (state = defaultValue, action = { type: 'NONE', payload: null }) => {
  const { type, payload } = action;
  switch (type) {
    case SUMMARY_LOAD:
      return {
        ...state,
        summary: {
          ...state.summary,
          isLoading: true
        }
      }
    case SUMMARY_SUCCESS:
      return {
        ...state,
        summary: {
          ...state.summary,
          isLoading: false,
          data: payload,
        }
      }
    case SUMMARY_FAILED:
      return {
        ...state,
        summary: {
          ...state.summary,
          error: payload,
        }
      }
    case SUMMARY_CLEAR_ERROR:
      return {
        ...state,
        summary: {
          ...state.summary,
          error: null,
        }
      }
    case CASHFLOW_LOAD:
      return {
        ...state,
        documentsIsLoading: true
      }
    case CASHFLOW_SUCCESS:
      return {
        ...state,
        documentsIsLoading: false,
        documents: {
          ...payload,
        }
      }
    case CASHFLOW_FAILED:
      return {
        ...state,
        documentsIsLoading: false,
        documentError: payload,
      }
    case CASHFLOW_CLEAR_ERROR:
      return {
        ...state,
        documentError: null,
      }
    case CASHFLOW_PAGE_CHANGE:
      return {
        ...state,
        documents: {
          ...state.documents,
          page: payload,
        }
      }
    case CASHFLOW_LIMIT_CHANGE:
      return {
        ...state,
        documents: {
          ...state.documents,
          pageLimit: payload,
        }
      }
    default:
      return state;
  }
}

export default reducer;
