import React, { Component } from 'react';


class FindAddBook extends Component {
    render() {
        return (
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
    )}
}

export default FindAddBook