import React, { Component } from 'react';
import * as BooksAPI from '../BooksAPI'

import BookShelf from '../components/BookShelf';
import FindAddBook from '../components/FindAddBook';


class Home extends Component {
    async componentDidMount() {
        try {
            const books = await BooksAPI.getAll();
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
                    <BookShelf title="Currently Reading"/>
                    <BookShelf title="Want To Read"/>
                    <BookShelf title="Read"/>
                    <div>
                        <FindAddBook />
                    </div>
                </div>
            </div>
        )}
}

export default Home