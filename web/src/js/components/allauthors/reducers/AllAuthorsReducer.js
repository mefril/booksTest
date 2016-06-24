import * as AllAuthorsActions from './../actions/AllAuthorsActions'
import _ from 'lodash'

const setAuthors = (state = [], authors)=> {
    return authors;
};

const setBooks = (state = [], authorId,books)=> {
    let authorToUpdate = _.find(state,{_id:authorId});
    if(authorToUpdate){
        authorToUpdate.books = books;
    }
    return state;
};

export default function (state = [], action = null) {
    switch (action.type) {
        case AllAuthorsActions.SET_AUTHORS:
            return setAuthors(state, action.authors);
            break;
        case AllAuthorsActions.SET_BOOKS:
            return setBooks(state,action.authorId,action.books);
    }
    return state;
}