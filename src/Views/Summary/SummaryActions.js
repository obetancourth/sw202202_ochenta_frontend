import { axiosPrivate } from "../../Services/api/axios";

export const SUMMARY_LOAD = "SUMMARY_LOAD";
export const SUMMARY_SUCCESS = "SUMMARY_SUCCESS";
export const SUMMARY_FAILED = "SUMMARY_FAILED";
export const SUMMARY_CLEAR_ERROR = "SUMMARY_CLEAR_ERROR";


export const getSummaryData = async (dispatch) => {
  try {
    dispatch({ type: SUMMARY_LOAD, payload: null });
    const { data } = await axiosPrivate.get('/cashflow/summary');
    console.log(data);
    dispatch({ type: SUMMARY_SUCCESS, payload: data });
  } catch (ex) {
    console.log("summaryActions", ex);
    dispatch({ type: SUMMARY_FAILED, payload: "Error al Cargar Resumen" });
  }
}

export const clearSummaryError = (dispatch) => {
  dispatch({ type: SUMMARY_CLEAR_ERROR, payload: null });
}
