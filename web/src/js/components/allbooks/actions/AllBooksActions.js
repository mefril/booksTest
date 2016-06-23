export const SET_BOOKS ="ALL_BOOKS_SET_BOOKS";

export function setBooks(allBooks){
    return {
        type: SET_BOOKS,
        books:allBooks
    }
}