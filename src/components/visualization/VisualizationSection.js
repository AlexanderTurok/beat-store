
import { connect } from "react-redux";

import MusicLi from '../player/MusicLi';
import Visualizer from "./Visualizer";

function VisualizationSection({ itemsData, playerData }) {
  return (
    <div className='visualization-section'>
      <ul className='music-data'>
        {itemsData.items.length > 0 && 
          <MusicLi 
            item={itemsData.items[playerData.currentSong]} 
          />
        }
      </ul> 
      <Visualizer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    itemsData: state.items,
    playerData: state.player
  }
};

export default connect(
  mapStateToProps
)
(VisualizationSection);