import React, { Component } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { search, getAll } from "./BooksAPI";

class SearchBook extends Component {
  state = {
    booksFound: [],
    userBooks: []
  };
  timeOut;

  componentDidMount() {
    getAll().then(response => {
      this.setState({ userBooks: response });
    });
  }

  searchBook = query => {
    clearTimeout(this.timeOut);

    this.timeOut = setTimeout(() => {
      search(query.trim()).then(response => {
        let { booksFound, userBooks } = this.state;

        if (!response || response.error) {
          booksFound = [];
        } else {
          booksFound = response;
          booksFound.forEach((bookFound, index) => {
            userBooks.forEach(userBook => {
              if (userBook.id === bookFound.id) {
                console.log(userBook);
                booksFound[index] = userBook;
              }
            });
          });
        }

        this.setState({ booksFound });
      });
    }, 500);
  };

  render() {
    const { booksFound } = this.state;
    const { categories } = this.props;
    console.log(booksFound);
    return (
      <div className="search-books">
        <SearchInput searchBook={this.searchBook} />
        <SearchResults booksFound={booksFound} categories={categories} />
      </div>
    );
  }
}

export default SearchBook;
