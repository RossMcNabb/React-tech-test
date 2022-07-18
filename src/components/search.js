import React from "react";

function Searchbar() {
    const handleInputChange = (search)=>{
 console.log("search.target.value")
    }
    return(
<div>
    <input type="text" id="searchcriteria" size="100%" onChange={handleInputChange}></input>
    <button id="search-button"> Search</button>
</div>
)}
export default Searchbar