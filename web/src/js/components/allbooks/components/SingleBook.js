import React,{Component} from 'react'
import BookAuthor from './BookAuthor'

export default class extends Component{
    render(){
        let bookList = this.props.authors && this.props.authors.map((author)=> {
                    return <BookAuthor key={author._id} author={author}/>
                });

        return (
            <li className="singleBookElement">
                <div className="bookTitle">{this.props.title}</div>
                <div className="bookDescription">{this.props.description}</div>
                <div className="bookAuthorsList">{bookList}</div>
            </li>
        )
    }
}