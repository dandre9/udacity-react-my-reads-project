import React from "react";
import BooksList from "./BooksList";
import PropTypes from "prop-types";

const ShelfCategory = props => {
  const { books, category, categories, updateShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{category}</h2>
      <BooksList
        books={books}
        categories={categories}
        updateShelf={updateShelf}
      />
    </div>
  );
};

ShelfCategory.propTypes = {
  updateShelf: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  books: PropTypes.array,
  categories: PropTypes.array.isRequired
};

export default ShelfCategory;
