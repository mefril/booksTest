import React, {Component} from 'react'
import {connect} from 'react-redux'
import BooksTable from './components/BooksTable'

@connect(state => ({booksModel: state}))
export default class AllBooksContainer extends Component {
    render() {
        return (
            <div className="sectionContainer">
                <BooksTable books={this.props.booksModel}/>
            </div>
        )
    }
}