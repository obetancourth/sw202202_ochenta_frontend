import { SUMMARY_CLEAR_ERROR, SUMMARY_FAILED, SUMMARY_LOAD, SUMMARY_SUCCESS } from "../../../Views/Summary/SummaryActions";

const defaultValue = {
  incomes: [],
  expenses: [],
  filterOptions: {
    startDate: new Date() - 10,
    endDate: new Date()
  },
  pagingIncome: {
    currentPage: 0,
    totalPages: 0,
    pagesLoaded: 0,
    limit: 0,
  },
  pagingExpenses: {
    currentPage: 0,
    totalPages: 0,
    pagesLoaded: 0,
    limit: 0,
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
    default:
      return state;
  }
}

export default reducer;
