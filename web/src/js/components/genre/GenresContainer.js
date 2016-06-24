import React, {Component} from 'react'
import SingleGenre from './components/SingleGenre'
import {connect} from 'react-redux'
import * as Actions from './actions/GenresActions'
import {bindActionCreators} from 'redux'
import BooksTable from './../allbooks/components/BooksTable'

let actions;

@connect(state => ({model: state}))
export default class AllBooksContainer extends Component {

    onGenreClick = (genreType) => {
        actions.chooseGenre(genreType)
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
                                    onClick={this.onGenreClick}
                />
            });
        let booksList = selectedGenre && books && books
                .filter((book)=>book.get('genre') === selectedGenre)
                // .map(book=><SingleBook key={book.get('_id')}
                //                        authors={book.get('authors').toJS()}
                //                        title={book.get('title')}
                // />);
        return (
            <div className="genresSectionContainer sectionContainer">
                <ul className="genresList list">
                    {genreList}
                </ul>
                <div className="booksListWrapper">
                    <BooksTable books={booksList&&booksList.toJS()}/>
                </div>
            </div>
        )
    }
}