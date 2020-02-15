import React, { Component } from "react";

class CategoryChanger extends Component {
  render() {
    const { categories } = this.props;

    return (
      <div className="book-shelf-changer">
        <select>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
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
