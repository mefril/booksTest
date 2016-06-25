import React, {Component} from 'react'
import BookAuthor from './BookAuthor'

export default class extends Component {
    goToBook = ()=> {
        this.props.goToBook(this.props._id);
    };

    render() {
        let authorList = this.props.authors && this.props.authors.map((author)=> {
                return <BookAuthor key={author._id}
                                   author={author}
                                   goToAuthor={this.props.goToAuthor}/>
            });

        return (
            <tr className="singleBookElement">
                <td className="bookTitle" onClick={this.goToBook}>{this.props.title}</td>
                <td className="bookAuthorsList">
                    <ul>{authorList}</ul>
                </td>
            </tr>
        )
    }
}