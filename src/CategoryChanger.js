import React, { Component } from "react";
import { update } from "./BooksAPI";

class CategoryChanger extends Component {
  handleSelect = event => {
    update(event);
  };

  render() {
    const { categories, selectedCategory } = this.props;

    return (
      <div className="book-shelf-changer">
        <select value={selectedCategory || "none"} onChange={this.handleSelect}>
          <option value="move" disabled>
            Move to...
          </option>
          {categories.map(category => (
            <option value={category.key}>{category.name}</option>
          ))}
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default CategoryChanger;
