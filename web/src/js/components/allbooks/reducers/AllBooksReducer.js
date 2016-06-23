import * as AllBooksActions from './../actions/AllBooksActions'

const setBooks = (state = [], books)=> {
    return books;
};

export default function (state = [], action = null) {
    switch (action.type) {
        case AllBooksActions.SET_BOOKS:
            return setBooks(state, action.books);
            break;
    }
    return state;
}