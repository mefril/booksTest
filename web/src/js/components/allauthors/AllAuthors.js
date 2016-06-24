import AllAuthorsReducer from './reducers/AllAuthorsReducer'
import * as AllAuthorsActions from './actions/AllAuthorsActions'
import React,{Component} from 'react'
import AppUtils from 'utils/AppUtils'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import AllAuthorsContainer from './AllAuthorsContainer'

const store = createStore(AllAuthorsReducer);

export default class extends Component{
    componentWillMount(){
        AppUtils.httpGet('allAuthors').then((response)=>{
            let authors = response.data;
            store.dispatch(AllAuthorsActions.setAuthors(authors));
            this.setState({});
        })
    }

    render(){
        return <Provider store={store}>
            <AllAuthorsContainer/>
        </Provider>
    }
}
