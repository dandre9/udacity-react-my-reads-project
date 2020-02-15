import React, { Component } from "react";
import BooksList from "./BooksList";

class SearchResults extends Component {
  render() {
    return (
      <div className="search-books-results">
        <BooksList />
      </div>
    );
  }
}

export default SearchResults;
