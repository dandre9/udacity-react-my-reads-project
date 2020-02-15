import React, { Component } from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { search } from "./BooksAPI";

class SearchBook extends Component {
  state = {
    booksFound: []
  };

  searchBook = query => {
    if (!query.trim()) {
      this.setState({ booksFound: [] });
    } else {
      search(query.trim()).then(response => {
        let { booksFound } = this.state;

        if (response.error) {
          console.error(response.error);
          booksFound = [];
        } else {
          booksFound = response;
        }

        this.setState({ booksFound });
      });
    }
  };

  render() {
    const { booksFound } = this.state;

    return (
      <div className="search-books">
        <SearchInput searchBook={this.searchBook} />
        <SearchResults booksFound={booksFound} />
      </div>
    );
  }
}

export default SearchBook;
