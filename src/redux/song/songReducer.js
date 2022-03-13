
import { SET_SONG } from "./songTypes";

const initialState = {
  song: {
    "id": 0,
    "bpm": 96,
    "key": "A#",
    "name": "We are the champions",
    "wavPath": "we-are-the-champions",
    "mp3Path": "we-are-the-champions",
    "picturePath": "we-are-the-champions",
    "tags": [{"id": 1,
              "name": "queen"},
             {"id": 2,
              "name": "rock"}]
  }
}

function songReducer(state = initialState, action) {
  switch(action.type) {
    case SET_SONG: 
      return {
        ...state,
        song: action.payload
      }
    default: return state;
  }
}

export default songReducer;