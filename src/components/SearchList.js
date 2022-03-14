
import { connect } from "react-redux";
import { setSearchItem } from "../redux/searchItem/searchItemActions";

function SearchList({ input, isClicked, setIsClicked, itemsData, setSearchItem }) {
  // create new array wehere all names are lower case
  const filteredData = itemsData.items.filter((item) => {
    return item.name.toLowerCase().includes(input);
  });

  const handleClick = (item) => {
     // send song obj to visulizer section
    setSearchItem(item);
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
    setSearchItem: (...args) => dispatch(setSearchItem(...args))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(SearchList);