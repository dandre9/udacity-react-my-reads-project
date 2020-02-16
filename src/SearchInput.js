import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class SearchInput extends Component {
  state = {
    query: ""
  };

  handleInput = event => {
    const { value } = event.target;
    const { searchBook } = this.props;

    /* Send query via callback to make an API search request */
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

SearchInput.propTypes = {
  searchBook: PropTypes.func.isRequired
};

export default SearchInput;
