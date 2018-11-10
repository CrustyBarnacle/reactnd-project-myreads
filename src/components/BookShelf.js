import React, { Component } from 'react';
import Book from './Book';


class BookShelf extends Component {
    render() {
        return (
        <section className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
                {
                  this.props.books.map(
                      (book, key) => <Book updateBook={this.props.updateBook} book={book} key={"book_" + key} />)
                }
            </ol>
          </div>
        </section>
        )}
}

export default BookShelf