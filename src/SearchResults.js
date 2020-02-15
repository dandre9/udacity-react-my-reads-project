import React from "react";
import BooksList from "./BooksList";

const SearchResults = props => {
  const { booksFound } = props;

  return (
    <div className="search-books-results">
      <BooksList books={booksFound} />
    </div>
  );
};

export default SearchResults;
