import React, { Component } from "react";
import BooksList from "./BooksList";

class ShelfCategory extends Component {
  render() {
    const { books, category, categories, updateShelf } = this.props;

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
  }
}

export default ShelfCategory;
