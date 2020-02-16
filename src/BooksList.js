import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const BooksList = props => {
  const { books, categories, updateShelf } = props;

  return (
    <div className="search-books-results">
      {/* Display empty shelf message in case of books is empty */}
      {books.length === 0 ? (
        <span className="books-grid">The are no books to display.</span>
      ) : (
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <Book
                book={book}
                categories={categories}
                updateShelf={updateShelf}
              />
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.array,
  categories: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default BooksList;
