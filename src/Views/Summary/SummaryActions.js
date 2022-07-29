import { axiosPrivate } from "../../Services/api/axios";

export const SUMMARY_LOAD = "SUMMARY_LOAD";
export const SUMMARY_SUCCESS = "SUMMARY_SUCCESS";
export const SUMMARY_FAILED = "SUMMARY_FAILED";
export const SUMMARY_CLEAR_ERROR = "SUMMARY_CLEAR_ERROR";

export const CASHFLOW_LOAD = "CASHFLOW_LOAD";
export const CASHFLOW_SUCCESS = "CASHFLOW_SUCCESS";
export const CASHFLOW_FAILED = "CASHFLOW_FAILED";
export const CASHFLOW_CLEAR_ERROR = "CASHFLOW_CLEAR_ERROR";
export const CASHFLOW_PAGE_CHANGE = "CASHFLOW_PAGE_CHANGE";
export const CASHFLOW_LIMIT_CHANGE = "CASHFLOW_LIMIT_CHANGE";

export const getSummaryData = async (dispatch) => {
  try {
    dispatch({ type: SUMMARY_LOAD, payload: null });
    const { data } = await axiosPrivate.get('/cashflow/summary');
    dispatch({ type: SUMMARY_SUCCESS, payload: data });
  } catch (ex) {
    console.log("summaryActions", ex);
    dispatch({ type: SUMMARY_FAILED, payload: "Error al Cargar Resumen" });
  }
}

export const clearSummaryError = (dispatch) => {
  dispatch({ type: SUMMARY_CLEAR_ERROR, payload: null });
}

export const getCashFlowDocuments = async (dispatch, page, limit) => {
  try {
    dispatch({ type: CASHFLOW_LOAD, payload: null });
    const { data } = await axiosPrivate.get(`/cashflow/page/${page}/${limit}`);
    dispatch({ type: CASHFLOW_SUCCESS, payload: data });
  } catch (ex) {
    console.log("summaryActions", ex);
    dispatch({ type: CASHFLOW_FAILED, payload: "Error al Cargar Documentos" });
  }
}

export const setCashFlowPage = (dispatch, page) => {
  dispatch({ type: CASHFLOW_PAGE_CHANGE, payload: page });
}

export const setCashFlowLimit = (dispatch, limit) => {
  dispatch({ type: CASHFLOW_LIMIT_CHANGE, payload: limit });
}
