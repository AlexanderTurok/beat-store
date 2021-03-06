
import axios from "axios";
import {
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS
} from "./apiTypes";

export const fetchItems = () => {
  return (dispatch) => {
    dispatch(fetchItemsRequest())
    axios.get("http://localhost:8080/beats")
    .then(response => {
      const items = response.data;
      dispatch(fetchItemsSuccess(items))
    })
    .catch(error => {
      dispatch(fetchItemsFailure(error.message))
    })
  }
}

export const fetchItemsRequest = () => {
  return {
    type: FETCH_ITEMS_REQUEST,
  }
}

export const fetchItemsSuccess = (items) => {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: items
  }
}

export const fetchItemsFailure = (error) => {
  return {
    type: FETCH_ITEMS_FAILURE,
    payload: error
  }
}



