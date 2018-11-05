import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI'

import BookShelf from '../components/BookShelf';


class Home extends Component {
    async componentDidMount() {
        try {
            const books = await BooksAPI.getAll();
            console.log(books)
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
                        <BookShelf title="Currently Reading"/>
                        <BookShelf title="Want To Read"/>
                        <BookShelf title="Read"/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )}
}

export default Home