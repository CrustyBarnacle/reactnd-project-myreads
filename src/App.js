import React from 'react'
// import BookShelf from './components/BookShelf';
// import FindAddBook from './components/FindAddBook';
import { Switch, Route } from 'react-router-dom'
import Home from "./views/Home";
import Search from "./views/Search";
// import * as BooksAPI from './BooksAPI'
import './App.css';


class BooksApp extends React.Component {

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
