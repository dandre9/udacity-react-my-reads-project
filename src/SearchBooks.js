import React, { Component } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { search, getAll } from "./BooksAPI";
import PropTypes from "prop-types";

class SearchBook extends Component {
  state = {
    booksFound: [],
    userBooks: []
  };
  timeOut;

  componentDidMount() {
    this.updateShelf();
  }

  updateBookCategory = (books, booksShelf) => {
    /* Compare user books to the search result so
      the book category can be updated */
    books.forEach((bookFound, index) => {
      booksShelf.forEach(userBook => {
        if (userBook.id === bookFound.id) {
          books[index] = userBook;
        }
      });
    });

    return books;
  };

  updateShelf = () => {
    getAll().then(response => {
      let { booksFound } = this.state;

      booksFound = this.updateBookCategory(booksFound, response);

      this.setState({ userBooks: response, booksFound });
    });
  };

  searchBook = query => {
    clearTimeout(this.timeOut);

    this.timeOut = setTimeout(() => {
      search(query.trim()).then(response => {
        let { booksFound, userBooks } = this.state;

        if (!response || response.error) {
          booksFound = [];
        } else {
          booksFound = this.updateBookCategory(response, userBooks);
        }

        this.setState({ booksFound });
      });
    }, 500);
  };

  render() {
    const { booksFound } = this.state;
    const { categories } = this.props;

    return (
      <div className="search-books">
        <SearchInput searchBook={this.searchBook} />
        <SearchResults
          updateShelf={this.updateShelf}
          booksFound={booksFound}
          categories={categories}
        />
      </div>
    );
  }
}

SearchBook.propTypes = {
  categories: PropTypes.array.isRequired
};

export default SearchBook;
