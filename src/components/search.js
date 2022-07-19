import React from "react";
import { ReactPropTypes } from "react";
import axios from ;

function Searchbar({searchText, setSearchText}) {
    const handleInputChange = (event)=>{
 setSearchText("event.target.value")
    }
    return(
<div>
    <form>
    <input type="text" id="searchcriteria" size="100%" onChange={handleInputChange} value={searchText}></input>
    </form>
    <button id="search-button" type="submit"> Search</button>
</div>
)};

export default Searchbar;
Searchbar.propTypes ={
    searchText:propTypes.string.isRequired,
    setSearchText:propTypes.string.isRequired,
};