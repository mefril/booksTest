import React, {Component} from 'react'
import {connect} from 'react-redux'
import BooksTable from './components/BooksTable'
import {browserHistory} from 'react-router'

@connect(state => ({booksModel: state}))
export default class AllBooksContainer extends Component {
    goToAuthor = (authorId)=> {
        browserHistory.push('/singleAuthor/' + authorId);
    };

    goToBook = (bookId)=> {
        browserHistory.push('/singleBook/' + bookId);
    };
    render() {
        return (
            <div className="sectionContainer">
                <BooksTable books={this.props.booksModel}
                            goToBook={this.goToBook}
                            goToAuthor={this.goToAuthor}/>
            </div>
        )
    }
}