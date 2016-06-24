import React,{Component} from 'react'
import BookAuthor from './BookAuthor'

export default class extends Component{
    render(){
        let bookList = this.props.authors && this.props.authors.map((author)=> {
                    return <BookAuthor key={author._id} author={author}/>
                });

        return (
            <tr className="singleBookElement">
                <td className="bookTitle">{this.props.title}</td>
                <td className="bookAuthorsList"><ul>{bookList}</ul></td>
            </tr>
        )
    }
}