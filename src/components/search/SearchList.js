
import { connect } from "react-redux";
import { setCurrentSong } from "../../redux/audioPlayer/playerActions";

function SearchList({ input, isClicked, setIsClicked, itemsData, setCurrentSong }) {
  // create new array wehere all names are lower case
  const filteredData = itemsData.items.filter((item) => {
    return item.name.toLowerCase().includes(input);
  });

  const handleClick = (item) => {
     // send song obj to visulizer section
    setCurrentSong(item);
    // close list when song is choosen
    setIsClicked(!isClicked);
  }
  
  return (
    <ul className={input !== "" && isClicked !== false ? // change class when text is typed
        "list-result-active" : "list-result"}>
      {filteredData.map((item) => (
        <li className='searched-item'
            key={item.id}
            onClick={() => handleClick(item)}>
          {item.name} 
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    itemsData: state.items,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentSong: (...args) => dispatch(setCurrentSong(...args))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(SearchList);