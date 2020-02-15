import React, { Component } from "react";
import Book from "./Book";

class BooksList extends Component {
  render() {
    const { books } = this.props;

    return (
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <Book book={book} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default BooksList;
