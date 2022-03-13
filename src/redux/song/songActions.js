
import { SET_SONG } from "./songTypes";

export const setSong = (song) => {
  return {
    type: SET_SONG,
    payload: song
  }
}