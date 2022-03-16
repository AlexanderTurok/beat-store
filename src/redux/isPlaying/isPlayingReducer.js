
import { SET_IS_PLAYING } from "./isPlayingTypes";

const initialState = {
  isPlaying: false
}

export function isPlayingReducer(state=initialState, action) {
  switch(action.type) {
    case SET_IS_PLAYING:
      return {
        ...state,
        isPlaying: !state.isPlaying
      }
    default: return state
  }
}