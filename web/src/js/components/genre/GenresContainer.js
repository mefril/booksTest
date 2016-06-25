import React, {Component} from 'react'
import SingleGenre from './components/SingleGenre'
import {connect} from 'react-redux'
import * as Actions from './actions/GenresActions'
import {bindActionCreators} from 'redux'
import BooksTable from './../allbooks/components/BooksTable'
import {browserHistory} from 'react-router'

let actions;

@connect(state => ({model: state}))
export default class AllBooksContainer extends Component {

    onGenreClick = (genreType) => {
        actions.chooseGenre(genreType)
    };
    goToAuthor = (authorId)=> {
        browserHistory.push('/singleAuthor/' + authorId);
    };

    goToBook = (bookId)=> {
        browserHistory.push('/singleBook/' + bookId);
    };
    render() {
        let {dispatch} = this.props;
        actions = bindActionCreators(Actions, dispatch);

        let books = this.props.model.get('books');
        let genres = this.props.model.get('genres');
        let selectedGenre = this.props.model.get('selectedGenre');
        let genreList = genres && genres.map((genre)=> {
                return <SingleGenre key={genre.get('_id')}
                                    type={genre.get('type')}
                                    selected={selectedGenre === genre.get('type')}
                                    onClick={this.onGenreClick}
                />
            });
        let booksList = selectedGenre && books && books
                .filter((book)=>book.get('genre') === selectedGenre);
        return (
            <div className="genresSectionContainer sectionContainer">
                <ul className="genresList list">
                    {genreList}
                </ul>
                <div className="booksListWrapper">
                    <BooksTable books={booksList&&booksList.toJS()}
                                goToBook={this.goToBook}
                                goToAuthor={this.goToAuthor}/>
                </div>
            </div>
        )
    }
}