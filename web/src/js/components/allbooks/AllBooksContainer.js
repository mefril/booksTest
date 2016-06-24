import React, {Component} from 'react'
import {connect} from 'react-redux'
import BooksTable from './components/BooksTable'

@connect(state => ({booksModel: state}))
export default class AllBooksContainer extends Component {
    render() {
        return (
            <BooksTable books={this.props.booksModel}/> 
        )
    }
}