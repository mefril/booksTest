import React, {Component} from 'react'
import AppUtils from 'utils/AppUtils'
import {browserHistory} from 'react-router'

//get rid of redux since there are no data updates
export default class extends Component {
    componentWillMount() {
        let bookId = this.props.params.bookId;
        AppUtils.httpGet('bookById/' + bookId).then((response)=> {
            this.book = response.data;
            this.setState({});
        })
    }

    goToAuthor = (authorId)=> {
        browserHistory.push('/singleAuthor/' + authorId);
    };

    goToGenre = () =>{
        browserHistory.push('/genres/' + this.book.genre);
    };

    render() {
        let authorList = this.book && this.book.authors.map(author=><li className="singleAuthor"
                                                                        key={author._id}
                                                                        onClick={this.goToAuthor.bind(this,author._id)}>{author.name}</li>);

        return <div className="sectionContainer singleBookSectionContainer">
            <div className="leftPanel">
                <div className="titleSection">
                    <label>Book Title:</label>
                    <div className="bookTitle">{this.book && this.book.title}</div>
                </div>
                <div className="bookGenreSection">
                    <label>Book Genre:</label>
                    <div className="bookGenre" onClick={this.goToGenre}>{this.book && this.book.genre}</div>
                </div>
                <div className="authorSection">
                    <label>Authors:</label>
                    <div className="authorList">{authorList}</div>
                </div>
            </div>
            <div className="rightPanel">
                <label>About:</label>
                <div className="bookDescription">
                    {this.book && this.book.about}
                </div>
            </div>
        </div>
    }
}
