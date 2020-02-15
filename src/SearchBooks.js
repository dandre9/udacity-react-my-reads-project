import React, { Component } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { search } from "./BooksAPI";

class SearchBook extends Component {
  state = {
    booksFound: []
  };
  timeOut;

  searchBook = query => {
    clearTimeout(this.timeOut);

    this.timeOut = setTimeout(() => {
      search(query.trim()).then(response => {
        let { booksFound } = this.state;

        booksFound = !response || response.error ? [] : response;

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
        <SearchResults booksFound={booksFound} categories={categories} />
      </div>
    );
  }
}

export default SearchBook;
