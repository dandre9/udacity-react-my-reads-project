import React, { Component } from "react";
import CategoryChanger from "./CategoryChanger";

class Book extends Component {
  render() {
    const { book, categories, updateShelf } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks &&
                book.imageLinks.smallThumbnail})`
            }}
          ></div>
          <CategoryChanger
          updateShelf={updateShelf}
            book={book}
            categories={categories}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}

export default Book;
