import {
  SET_CURRENT_SONG,
  TOGGLE_RANDOM,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
  SET_SONGS_ARRAY,
} from './playerTypes';

export const setCurrentSong = (song) => {
  return {
    type: SET_CURRENT_SONG,
    payload: data
  }
};

export const toggleRandom = (song) => {
  return {
    type: TOGGLE_RANDOM,
    payload: song
  }
};

export const toggleRepeat = (song) => {
  return {
    type: TOGGLE_REPEAT,
    payload: song
  }
};

export const togglePlaying = (song) => {
  return {
    type: TOGGLE_PLAYING,
    payload: song
  }
};

export const setSongsArray = (array) => {
  return {
    type: SET_SONGS_ARRAY,
    payload: array
  }
};