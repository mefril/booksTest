import GenresReducer from './reducers/GenresReducer'
import * as GenresActions from './actions/GenresActions'
import React,{Component} from 'react'
import AppUtils from 'utils/AppUtils'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import GenresContainer from './GenresContainer'

const store = createStore(GenresReducer);
require('styles/genres.less');

export default class extends Component{
    componentWillMount(){
        Promise.all([
            AppUtils.httpGet('allGenres'),
            AppUtils.httpGet('allBooks')
        ]).then((response)=>{
            let genres = response[0].data;
            let books = response[1].data;
            store.dispatch(GenresActions.setBooks(books));
            store.dispatch(GenresActions.setGenres(genres));
            this.setState({});
        })
    }

    render(){
        return <Provider store={store}>
            <GenresContainer/>
        </Provider>
    }
}
