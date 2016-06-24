import SingleBook from './SingleBook'
import React from 'react'

export default (props) =>{
    let bookList = props.books && props.books.map((book)=> {
            return <SingleBook key={book._id}
                {...book}
            />
        });

    return (
        <table className="table allBooksListContainer">
            <thead>
            <tr>
                <th>Book Name</th>
                <th>Authors</th>
            </tr>
            </thead>
            <tbody>
            {bookList}
            </tbody>
        </table>
    )
}