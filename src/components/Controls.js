
import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { 
  setCurrentSong,
  togglePlaying,
  toggleRepeat
} from "../redux/audioPlayer/playerActions"

function Controls({ playerData, itemsData }) {
  // states
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audio = useRef('audio_tag');

  // functions
  const formatTime = (sec) => {
    const minutes = ~~(sec / 60);
    const seconds = ~~(sec % 60);

    const returendMinutes = minutes < 10 ? 
      `$0${minutes}` : minutes;
    const returendSeconds = seconds < 10 ? 
      `$0${seconds}` : seconds;

    return `${returendMinutes}:${returendSeconds}`
  }

  const handleProgress = (e) => {
    let compute = (e.target.value * duration) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  }

  const toggleAudio = () => {
    audio.current.paused ?
    audio.current.play() : audio.current.pause()
  }

  const handlePlay = () => {
    togglePlaying();
    toggleAudio();
  }

  const handleEnd = (e) => {
    // ------------------
  }

  const goToNextSong = () => {
    // ------------------
  }

  const goToPreviousSong = () => {
    // ------------------
  }

  useEffect(() => {
    playerData.isPlaying && toggleAudio();
  }, [playerData.currentSong])

  return (
    <div className="audio-player">
      <audio 
        ref={audio}
        preload="metadata"
        onEnded={handleEnd}
        // src={itemsData.items[playerData.currentSong].mp3Path}
        onCanPlay={(e) => setDuration(e.tager.duration)}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
      />
      <div className="control-buttons">
        <button onClick={goToPreviousSong}>
          Prev Song
        </button>
        <button onClick={goToNextSong}>
          Prev Song
        </button>
        <button onClick={handlePlay}>
          Play / Pause
        </button>
        <button onClick={toggleRepeat}>
          Repeat
        </button>
      </div>
      <input
          type="range"
          name="progresBar"
          onChange={handleProgress}
          value={duration ? (currentTime * 100) / duration : 0}
        />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    playerData: state.player,
    itemsData: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentSong: () => dispatch(setCurrentSong()),
    toggleRepeat: () => dispatch(toggleRepeat()),
    togglePlaying: () => dispatch(togglePlaying())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);