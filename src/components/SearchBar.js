import React from "react";

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search.."/>
            <button type="submit">Submit</button>
        </div>
    )
}

export default SearchBar;