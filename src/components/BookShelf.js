import React, { Component } from 'react';
import Book from './Book';


class BookShelf extends Component {
    render() {
        return (
        <section className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <Book />
            </ol>
          </div>
        </section>
        )}
}

export default BookShelf