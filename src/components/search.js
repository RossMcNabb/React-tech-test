import React, { useState } from "react";
import { ReactPropTypes } from "react";
import getImageSearch from "./getImages";


function Searchbar() {
    const [searchText, setSearchText] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        getImageSearch(searchText)
    }
    return(
<div className="search">
    <form className="search-form" onSubmit={handleSubmit}>
    <input type="text" id="searchcriteria" size="100%" onChange={(e) => setSearchText(e.target.value)} value={searchText}></input>
    </form>
    <button id="search-button" type="submit"> Search</button>
</div>
)};

export default Searchbar;
Searchbar.propTypes ={
    searchText:propTypes.string.isRequired,
    setSearchText:propTypes.string.isRequired,
};