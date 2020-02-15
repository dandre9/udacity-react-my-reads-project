import React, { Component } from "react";
import Book from "./Book";

class BooksList extends Component {
  render() {
    const { books } = this.props;

    return (
      <div className="search-books-results">
        {books.length === 0 ? (
          <span className="books-grid">The are no books in this shelf.</span>
        ) : (
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <Book book={book} />
              </li>
            ))}
          </ol>
        )}
      </div>
    );
  }
}

export default BooksList;
