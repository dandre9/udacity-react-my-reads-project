import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchInput extends Component {
  state = {
    query: ""
  };

  handleInput = event => {
    const { value } = event.target;
    const { searchBook } = this.props;

    searchBook(value);

    this.setState({ query: value });
  };

  render() {
    const { query } = this.state;

    return (
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            value={query}
            onChange={this.handleInput}
            type="text"
            placeholder="Search by title or author"
          />
        </div>
      </div>
    );
  }
}

export default SearchInput;
