import React, { Component } from "react";
import Book from "./Book";

class BooksList extends Component {
  render() {
    const { books, categories } = this.props;

    return (
      <div className="search-books-results">
        {books.length === 0 ? (
          <span className="books-grid">The are no books to display.</span>
        ) : (
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <Book book={book} categories={categories} />
              </li>
            ))}
          </ol>
        )}
      </div>
    );
  }
}

export default BooksList;
