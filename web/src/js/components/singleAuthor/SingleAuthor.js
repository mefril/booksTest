import React, {Component} from 'react'
import AppUtils from 'utils/AppUtils'
import {browserHistory} from 'react-router'

//get rid of redux since there are no data updates
export default class extends Component {
    componentWillMount() {
        let authorId = this.props.params.authorId;
        Promise.all([
            AppUtils.httpGet('authorsById/' + authorId),
            AppUtils.httpGet('booksByAuthor/' + authorId)
        ]).then((response)=> {
            this.author = response[0].data;
            this.books = response[1].data;
            this.setState({});
        })
    }

    goToBook = (bookId)=> {
        browserHistory.push('/singleBook/' + bookId);
    };

//TODO - add scroll for books
    render() {
        let bookList = this.books && this.books.map(book=><li className="singleBook"
                                                              key={book._id}
                                                              onClick={this.goToBook.bind(this,book._id)}>{book.title}</li>);

        return <div className="sectionContainer singleAuthorSection">
            <div className="leftPanel">
                <div className="nameSection">
                    <label>Author Name:</label>
                    <div className="authorName">{this.author && this.author.name}</div>
                </div>
                <div className="booksSection">
                    <label>Written Books:</label>
                    <div className="bookList">{bookList}</div>
                </div>
            </div>
            <div className="rightPanel">
                <label>Biography:</label>
                <div className="authorDescription">
                    {this.author && this.author.about}
                </div>
            </div>
        </div>
    }
}
