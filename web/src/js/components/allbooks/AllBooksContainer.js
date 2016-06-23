import React, {Component} from 'react'
import SingleBook from './components/SingleBook'
import {connect} from 'react-redux';

@connect(state => ({booksModel: state}))
export default class AllBooksContainer extends Component {
    render() {
        let bookList = this.props.booksModel && this.props.booksModel.map((book)=> {
                return <SingleBook key={book._id}
                    {...book}
                                   // title={book.get('title')}
                                   // authors={book.get('authors')}
                />
            });

        return (
            <ul className="allBooksListContainer">
                {bookList}
            </ul>
        )
    }
}