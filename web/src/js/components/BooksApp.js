import React, {Component} from 'react'
import {Router, Route, browserHistory} from 'react-router'
import AllBooks from './allbooks/AllBooks'
import AllAuthors from './allauthors/AllAuthors'
import Genres from './genre/Genres'

require('styles/common.less');
require('bootstrap-loader'); //Disable it in dev mode after first run to improve performance

export default class BooksApp extends Component {
    constructor(props){
        super(props);
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
                        <h2>Welcome!</h2>
                    </div>
                </div>
                <Router history={browserHistory}>
                    <Route path="/books" component={AllBooks}/>
                    <Route path="/authors" component={AllAuthors}/>
                    <Route path="/genres" component={Genres}/>
                </Router>
            </div>
        );
    }
}
