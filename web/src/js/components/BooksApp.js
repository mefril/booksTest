import React, {Component} from 'react'
import {Router, Route, browserHistory} from 'react-router'
import AllBooks from './allbooks/AllBooks'
import AllAuthors from './allauthors/AllAuthors'

require('styles/common.less');

export default class BooksApp extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
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
                </Router>
            </div>
        );
    }
}
