import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI'


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            results: []
        }
    }
    
    componentDidMount() {
        try {
            BooksAPI.getAll()
            .then(response => {
                this.setState({ books: response});
            });
        }
        catch(error) {
            console.log(error)
        }
    }    
    
    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf).then(response => {
            book.shelf = shelf;
            this.setState(state => ({
                books: state.books.filter(b => b.id !== book.id).concat([book])
            }));
        });
    }
    
    render() {
        return (
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author"/>

                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid"></ol>
              </div>
            </div>
        )
    }
}

export default Search