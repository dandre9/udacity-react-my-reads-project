import React, { Component } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

class SearchBook extends Component {
  render() {
    return (
      <div className="search-books">
        <SearchInput />
        <SearchResults />
      </div>
    );
  }
}

export default SearchBook;
