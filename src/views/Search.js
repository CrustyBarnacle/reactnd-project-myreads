import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from '../BooksAPI'

import Book from '../components/Book'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            results: [],
            query: ""
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
    
    updateQuery = (query) => {
        this.setState({query: query}, this.submitSearch);
    }
    
    submitSearch() {
        if(this.state.query === '' || this.state.query === undefined) {
            return this.setState({ results: [] });
        }
        BooksAPI.search(this.state.query.trim())
        .then(response => {
            if(response.error) {
                return this.setState({ results: [] });
            }
            else {
                response.forEach(b => {
                    let find = this.state.books.filter(B => B.id === b.id);
                    if (find[0]) {
                        b.shelf = find[0].shelf;
                    }
                });
                return this.setState({ results: response});
            }
        });
    }
    
    render() {
        return (
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                  <input autoFocus type="text" placeholder="Search by title or author" value={this.state.query}
                  onChange={(event) => this.updateQuery(event.target.value)} />

                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                {
                    this.state.results.map((item, key) => <Book updateBook={this.updateBook} key={"book_" + key} book={item} />)
                }
                </ol>
              </div>
            </div>
        )
    }
}

export default Search