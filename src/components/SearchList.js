
import { connect } from "react-redux";
import { setSearchItem } from "../redux/searchItem/searchItemActions";

function SearchList({ input, itemsData, setSearchItem }) {
  // create new array wehere all names are lower case
  const filteredData = itemsData.items.filter((item) => {
    return item.name.toLowerCase().includes(input);
  });

  // send song obj to visulizer section
  const handleClick = (item) => {
    setSearchItem(item);
    console.log(input)
  }
  
  return (
    <ul className={input !== "" ? // change class when text is typed
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