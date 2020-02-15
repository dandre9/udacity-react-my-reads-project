import React from "react";
import BooksList from "./BooksList";

const SearchResults = props => {
  const { booksFound, categories } = props;

  return (
    <div className="search-books-results">
      <BooksList books={booksFound} categories={categories} />
    </div>
  );
};

export default SearchResults;
