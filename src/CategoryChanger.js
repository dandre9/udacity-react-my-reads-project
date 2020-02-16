import React from "react";
import { update } from "./BooksAPI";
import PropTypes from "prop-types";

const handleSelect = (event, props) => {
  const { book, updateShelf } = props;
  const { value } = event.target;

  update(book, value).then(response => {
    /* Callback to update Shelf/Search component */
    updateShelf(response);
  });
};

const CategoryChanger = props => {
  const { categories, book } = props;

  return (
    <div className="book-shelf-changer">
      <select
        value={book.shelf || "none"}
        onChange={e => handleSelect(e, props)}
      >
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
};

CategoryChanger.propTypes = {
  book: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default CategoryChanger;
