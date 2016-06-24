import React, {Component} from 'react'
import SingleBook from './components/SingleBook'
import {connect} from 'react-redux';

@connect(state => ({booksModel: state}))
export default class AllBooksContainer extends Component {
    render() {
        let bookList = this.props.booksModel && this.props.booksModel.map((book)=> {
                return <SingleBook key={book._id}
                    {...book}
                />
            });

        return (
            <table className="table allBooksListContainer">
                <thead>
                <tr>
                    <th>Book Name</th>
                    <th>Authors</th>
                </tr>
                </thead>
                <tbody>
                {bookList}
                </tbody>
            </table>
        )
    }
}