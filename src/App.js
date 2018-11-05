import React from 'react'
import { Route } from 'react-router-dom'

import './App.css';

import Home from "./views/Home";
import Search from "./views/Search";
// import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/search"} component={Search} />
      </div>
  );
  }
}

export default BooksApp
