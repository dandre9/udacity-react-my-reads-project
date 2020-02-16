import React, { Component } from "react";
import { update } from "./BooksAPI";
import PropTypes from "prop-types";

class CategoryChanger extends Component {
  handleSelect = event => {
    const { book, updateShelf } = this.props;
    const { value } = event.target;

    update(book, value).then(response => {
      updateShelf(response);
    });
  };

  render() {
    const { categories, book } = this.props;

    return (
      <div className="book-shelf-changer">
        <select value={book.shelf || "none"} onChange={this.handleSelect}>
          <option value="move" disabled>
            Move to...
          </option>
          {categories.map(category => (
            <option key={category.key} value={category.key}>
              {category.name}
            </option>
          ))}
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

CategoryChanger.propTypes = {
  book: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default CategoryChanger;
