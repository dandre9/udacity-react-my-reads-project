import React from "react";
import SearchBooks from "./SearchBooks";
import Shelf from "./Shelf";
import { Route } from "react-router-dom";
import "./App.css";

/* An ideia for the future to dynamically create others shelves */
const categories = [
  { key: "currentlyReading", name: "Currently Reading" },
  { key: "wantToRead", name: "Want to Read" },
  { key: "read", name: "Read" }
];

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <Shelf categories={categories} />}
        />
        <Route
          path="/search"
          render={() => <SearchBooks categories={categories} />}
        />
      </div>
    );
  }
}

export default BooksApp;
