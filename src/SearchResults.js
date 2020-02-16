import React from "react";
import BooksList from "./BooksList";
import PropTypes from "prop-types";

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

SearchResults.propTypes = {
  updateShelf: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  booksFound: PropTypes.array.isRequired
};

export default SearchResults;
