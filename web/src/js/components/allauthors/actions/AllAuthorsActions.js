export const SET_AUTHORS = "ALL_AUTHORS_SET_AUTHORS";
export const SET_BOOKS = "ALL_AUTHORS_SET_BOOKS";

export function setAuthors(authors) {
    return {
        type: SET_AUTHORS,
        authors: authors
    }
}
export function setBooks(authorId, books) {
    return {
        type: SET_BOOKS,
        authorId: authorId,
        books: books
    }
}