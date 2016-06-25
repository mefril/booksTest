import React, {Component} from 'react'
import {Router, Route, browserHistory} from 'react-router'
import AllBooks from './allbooks/AllBooks'
import AllAuthors from './allauthors/AllAuthors'
import Genres from './genre/Genres'
import SingleAuthor from './singleAuthor/SingleAuthor'
import SingleBook from './singleBook/SingleBook'

require('styles/common.less');
require('styles/books.less');
require('styles/authors.less');
require('styles/singleAuthor.less');
require('styles/singleBook.less');
require('bootstrap-loader'); //Disable it in dev mode after first run to improve performance

export default class BooksApp extends Component {
    constructor(props){
        super(props);
    }

    goToAllBooks=()=>{
        browserHistory.push('/books');
    }
    goToAllAuthors=()=>{
        browserHistory.push('/authors');
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <div className="title">
                        <h1>
                            <div className="logo"></div>
                            <label>Books</label>
                            <label>A</label>
                            <span>pp</span>
                        </h1>
                        <div className="routeButtons">
                            <label onClick={this.goToAllBooks}>All Books</label>
                            <label onClick={this.goToAllAuthors}>All Authors</label>
                        </div>
                    </div>

                </div>
                <Router history={browserHistory}>
                    <Route path="/books" component={AllBooks}/>
                    <Route path="/authors" component={AllAuthors}/>
                    <Route path="/genres/:genreType" component={Genres}/>
                    <Route path="/singleAuthor/:authorId" component={SingleAuthor}/>
                    <Route path="/singleBook/:bookId" component={SingleBook}/>
                    <Route path="/" component={null}/>
                </Router>
            </div>
        );
    }
}
