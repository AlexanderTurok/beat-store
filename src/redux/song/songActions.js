
import { SET_SONG,
         SET_IS_PLAYING
} from "./songTypes";

export const setSong = (song) => {
  return {
    type: SET_SONG,
    payload: song
  }
}

export const setIsPlaying = (bool) => {
  return {
    type: SET_IS_PLAYING,
    payload: bool
  }
}