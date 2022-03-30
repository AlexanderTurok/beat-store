
import { useState, useEffect } from "react";
import { connect } from "react-redux"
import { 
  setCurrentSong,
  togglePlaying,
  toggleRepeat
} from "../redux/audioPlayer/playerActions"

function Controls({ playerData }) {
  // states
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audio = useRef('audio_tag');

  // functions
  const formatTime = (sec) => {
    const minutes = ~~(sec / 60);
    const seconds = ~~(sec % 60);

    minutes < 10 ? `$0${minutes}` : minutes;
    seconds < 10 ? `$0${seconds}` : seconds;

    return `${minutes}:${seconds}`
  }

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
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

  useEffect(() => {
    playerData.playing && toggleAudio();
  }, [currentSong])

  return (
    <div className="audio-player">
      <audio 
        ref={audio}
        preload={true}
        onEnded={handleEnd}
        src={itemsData.items[current].mp3Path}
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
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    playerData: state,
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