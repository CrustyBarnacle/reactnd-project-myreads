import React from 'react'
// import BookShelf from './components/BookShelf';
// import FindAddBook from './components/FindAddBook';
import { Switch, Route } from 'react-router-dom'
import Home from "./views/Home";
import Search from "./views/Search";
// import * as BooksAPI from './BooksAPI'
import './App.css';


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
          <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/search"} component={Search} />
          </Switch>
      </div>
    )
  }
}

export default BooksApp
