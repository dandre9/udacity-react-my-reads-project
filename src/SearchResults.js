import React from "react";
import BooksList from "./BooksList";

const SearchResults = props => {
  const { booksFound, categories, updateShelf } = props;

  return (
    <div className="search-books-results">
      <BooksList
        updateShelf={updateShelf}
        books={booksFound}
        categories={categories}
      />
    </div>
  );
};

export default SearchResults;
