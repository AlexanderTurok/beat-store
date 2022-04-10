
import { useState } from "react";
import SearchList from './SearchList';

function SearchInput({ isClicked, setIsClicked}) {
  // state for entered text
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };  

  return (
    <>
      {!isClicked ? "" : // change classname if input empty
        <div>
          <input 
            className='header-search-bar'
            type="text"
            placeholder='Search...'
            onChange={inputHandler} 
          />
          <SearchList 
            input={inputText}
            // to close list when song is choosen
            isClicked={isClicked} 
            setIsClicked={setIsClicked} 
          /> 
        </div>
      }
    </>
  )
}

export default SearchInput;