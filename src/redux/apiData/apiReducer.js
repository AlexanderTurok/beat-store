import {
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS
} from "./apiTypes";

const initialState = {
  error: null,
  loading: false,
  items: []
}

function apiReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_ITEMS_REQUEST: return {
      ...state,
      loading: true
    }
    case FETCH_ITEMS_SUCCESS: return {
      ...state,
      loading: false,
      items: action.payload,
      error: null
    }
    case FETCH_ITEMS_FAILURE: return {
      ...state,
      loading: false,
      items: [],
      error: action.payload
    }
    default: return state;
  }
}

export default apiReducer;
