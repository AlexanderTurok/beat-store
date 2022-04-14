
import { connect } from "react-redux";
import { setCurrentSong } from "../../redux/audioPlayer/playerActions";
// images
import { BsFillShareFill as Share } from "react-icons/bs";
import { BsPlayCircle as PlayButton } from "react-icons/bs";
import { BsPauseCircle as PauseButton } from "react-icons/bs";
import { GiShoppingCart as Cart } from "react-icons/gi";

function MusicLi({ item, playerData, setCurrentSong }) {

  return(
    <li className="music-li" onClick={() => setCurrentSong(item.id - 1)}>
      <div className="play-image">
        <img 
          className="music-li-el music-li-icon"
          src={require(`../../images/${item.picturePath}.jpg`)}
        />
        {playerData.isPlaying ? 
          <PauseButton className="play-button"/> : 
          <PlayButton className="play-button"/>}
      </div>
      <p className="music-li-el music-li-title">{item.name}</p>
      <p className="music-li-el music-li-p">{item.key}</p>
      <p className="music-li-el music-li-p">{item.bpm}</p>
      <div className="div-tags">
        {item.tags.map((tag) => (
          <p key={tag.id}
             className="music-li-el music-li-tags">
            {tag.name}
          </p>
        ))}
      </div>
      <Share className="music-li-el btn-share" />
      <button className="music-li-el btn-add">
        <Cart className="cart-image"/>
        ADD
      </button>
    </li>
  );
}

const mapStateToProps = state => {
  return {
    songData: state.song,
    playerData: state.player
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setCurrentSong: (...args) => dispatch(setCurrentSong(...args))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(MusicLi);