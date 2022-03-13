
import { SET_SEARCH_ITEM } from "./searchItemTypes";

export const setSearchItem = (searchItem) => {
  return {
    type: SET_SEARCH_ITEM,
    payload: searchItem
  }
}