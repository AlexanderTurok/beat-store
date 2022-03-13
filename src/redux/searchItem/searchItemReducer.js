
import { SET_SEARCH_ITEM } from "./searchItemTypes";

const initialState = {
  searchItem: undefined
}; 

function searchItemReducer(state = initialState, action) {
  switch(action.type) {
    case SET_SEARCH_ITEM: 
      return {
        ...state,
        searchItem: action.payload
      }
    default: return state;
  }
}

export default searchItemReducer;