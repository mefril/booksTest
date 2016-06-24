import React, {Component} from 'react'
import SingleAuthor from './components/SingleAuthor'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

import AppUtils from 'utils/AppUtils'
import * as Actions from './actions/AllAuthorsActions'

let actions;

@connect(state => ({authorsModel: state}))
export default class extends Component {
    loadBooks = (authorId,callback) =>{
        //TODO - cache loaded books
        let currentAuthor = _.find(this.props.authorsModel,{_id:authorId});
        if(currentAuthor.books && currentAuthor.length > 0){
            callback(currentAuthor.books);
        } else {
            AppUtils.httpGet('booksByAuthor/' + authorId).then((result)=> {
                actions.setBooks(authorId, result.data);
                this.setState({});
                callback(result.data);
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
                    {...author}
                />
            });

        return (
            <ul className="allAuthorsContainer">
                {authorList}
            </ul>
        )
    }
}