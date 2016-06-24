import AllBooksReducer from './reducers/AllBooksReducer'
import * as AllBoocksActions from './actions/AllBooksActions'
import React,{Component} from 'react'
import AppUtils from 'utils/AppUtils'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AllBooksContainer from './AllBooksContainer'

const allBooksStore = createStore(AllBooksReducer);

export default class extends Component{
    componentWillMount(){
        AppUtils.httpGet('allBooks').then((response)=>{
            let books = response.data;
            allBooksStore.dispatch(AllBoocksActions.setBooks(books));
            this.setState({});
        })
    }

    render(){
        return <Provider store={allBooksStore}>
            <AllBooksContainer/>
        </Provider>
    }
}
