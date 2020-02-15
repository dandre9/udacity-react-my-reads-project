import React, { Component } from "react";
import BooksList from "./BooksList";

class ShelfCategory extends Component {
  //TODO: Function to filter books by shelf
  render() {
    const { books } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <BooksList books={books} />
      </div>
    );
  }
}

export default ShelfCategory;
