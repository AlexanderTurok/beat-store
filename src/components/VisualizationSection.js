
import { connect } from "react-redux";

import MusicLi from './player/MusicLi';
import Visualizer from "./Visualizer";

function VisualizationSection({ searchData, songData }) {
  let data;
  // if we didnt search song, show first item from fetched data
  if (searchData.searchItem === undefined) data = [songData.song];
  else data = [searchData.searchItem]
  
  return (
    <div className='visualization-section'>
      <ul className='music-data'>
        {data.map((item) => (
          <MusicLi key={item.id} item={item}/>
        ))}
      </ul> 
      <div>
        <Visualizer />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    searchData: state.searchItem,
    songData: state.song
  }
};

export default connect(
  mapStateToProps
)
(VisualizationSection);