import * as GenresActions from './../actions/GenresActions'
import Immutable, {List, Map} from 'immutable';

const setBooks = (state = Map(), books)=> {
    return state.set('books', Immutable.fromJS(books));
};

const setGenres = (state = Map(), genres)=> {
    return state.set('genres', Immutable.fromJS(genres));
};

const chooseGenre = (state = Map(), genreType)=> {
    return state.set('selectedGenre', genreType);
};

export default function (state = Map(), action = null) {
    switch (action.type) {
        case GenresActions.SET_BOOKS:
            return setBooks(state, action.books);
        case GenresActions.CHOOSE_GENRE:
            return chooseGenre(state, action.genreType);
        case GenresActions.SET_GENRES:
            return setGenres(state, action.genres);
    }
    return state;
}