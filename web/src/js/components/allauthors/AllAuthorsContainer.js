import React, {Component} from 'react'
import SingleAuthor from './components/SingleAuthor'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import IScroll from 'iscroll'
import AppUtils from 'utils/AppUtils'
import * as Actions from './actions/AllAuthorsActions'
import {browserHistory} from 'react-router'

let actions;

@connect(state => ({authorsModel: state}))
export default class extends Component {
    componentDidMount() {
        this.scroll = new IScroll(this.refs['scrollableWrapper'],
            {
                mouseWheel: true,
                scrollbars: true,
                fadeScrollbars: true
            });
    }

    componentDidUpdate() {
        this.scroll && this.scroll.refresh();
    }

    goToAuthor = (authorId)=> {
        browserHistory.push('/singleAuthor/' + authorId);
    };
    
    goToBook = (bookId)=> {
        browserHistory.push('/singleBook/' + bookId);
    };

    loadBooks = (authorId, callback) => {
        let currentAuthor = _.find(this.props.authorsModel, {_id: authorId});
        if (currentAuthor.books && currentAuthor.length > 0) {
            if (callback) {
                callback(currentAuthor.books);
            }
            this.scroll.refresh();
        } else {
            AppUtils.httpGet('booksByAuthor/' + authorId).then((result)=> {
                actions.setBooks(authorId, result.data);
                this.setState({});
                this.scroll.refresh();
                if (callback) {
                    callback(result.data);
                }
            })
        }
    };

    render() {
        let {dispatch} = this.props;
        actions = bindActionCreators(Actions, dispatch);
        let authorList = this.props.authorsModel && this.props.authorsModel.map((author)=> {
                return <SingleAuthor key={author._id}
                                     loadBooks={this.loadBooks}
                                     authorId={author._id}
                                     goToBook={this.goToBook}
                                     goToAuthor={this.goToAuthor}
                    {...author}
                />
            });

        return (
            <div className="sectionContainer authorsSection">
                <div className="leftPanel">
                </div>

                <div className="rightPanel scrollableWrapper" ref="scrollableWrapper">
                    <div className="allAuthorsContainer scrollableContainer">
                        {authorList}
                    </div>
                </div>
            </div>
        )
    }
}