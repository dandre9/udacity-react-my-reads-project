import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAll } from "./BooksAPI";
import ShelfCategory from "./ShelfCategory";

class Shelf extends Component {
  state = {
    userBooks: []
  };

  componentDidMount() {
    getAll().then(response => {
      this.setState({ userBooks: response });
    });
  }

  render() {
    const { categories } = this.props;
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
                category={category.name}
                books={userBooks.filter(book => book.shelf === category.key)}
                categories={categories}
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
