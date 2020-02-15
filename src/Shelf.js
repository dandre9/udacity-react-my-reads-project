import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAll } from "./BooksAPI";
import ShelfCategory from "./ShelfCategory";

/* An ideia for the future to dynamically create others shelves */
const categories = [
  { key: "currentlyReading", name: "Currently Reading" },
  { key: "wantToRead", name: "Want to Read" },
  { key: "read", name: "Read" }
];

class Shelf extends Component {
  state = {
    userBooks: []
  };

  //TODO: Function to filter books by shelf

  componentDidMount() {
    getAll().then(response => {
      this.setState({ userBooks: response });
    });
  }

  render() {
    const { userBooks } = this.state;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {categories.map(category => (
              <ShelfCategory
                key={category.key}
                category={category}
                books={userBooks.filter(book => book.shelf === category.key)}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Shelf;
