import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI'

import BookShelf from '../components/BookShelf';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
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


    render() {
        return (          
            <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>    
                        <BookShelf title="Currently Reading" books={this.state.books.filter(b => b.shelf === "currentlyReading")}/>
                        <BookShelf title="Want To Read" books={this.state.books.filter(b => b.shelf === "wantToRead")}/>
                        <BookShelf title="Read" books={this.state.books.filter(b => b.shelf === "read")}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )}
}

export default Home
