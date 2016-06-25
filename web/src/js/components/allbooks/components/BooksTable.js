import SingleBook from './SingleBook'
import React, {Component} from 'react'
import IScroll from 'iscroll'

export default class extends Component {

    componentDidMount() {
        this.scroll = new IScroll(this.refs['scrollableWrapper'],
            {
                mouseWheel: true,
                scrollbars: true,
                fadeScrollbars: true
            });
    }

    componentDidUpdate() {
        this.scroll && this.scroll.refresh();
    }

    render() {
        let bookList = this.props.books && this.props.books.map((book)=> {
                return <SingleBook key={book._id}
                    {...book}
                                   goToBook={this.props.goToBook}
                                   goToAuthor={this.props.goToAuthor}
                />
            });

        return (
            <div className="allBooksListContainer">
                <table className="headerTable">
                    <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Authors</th>
                    </tr>
                    </thead>
                </table>
                <div className="bodyTable">
                    <div className="scrollableWrapper" ref="scrollableWrapper">
                        <table className="scrollableContainer">
                            <tbody>
                            {bookList}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}