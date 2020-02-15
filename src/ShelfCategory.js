import React, { Component } from "react";
import BooksList from "./BooksList";

class ShelfCategory extends Component {
  //TODO: Function to filter books by shelf
  render() {
    const { books, category, categories } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{category}</h2>
        <BooksList books={books} categories={categories} />
      </div>
    );
  }
}

export default ShelfCategory;
