export const SET_BOOKS = "GENRES_SET_ALL_BOOKS";
export const SET_GENRES = "GENRES_SET_GENRES";
export const CHOOSE_GENRE = "GENRES_CHOOSE_GENRES";

export function setBooks(allBooks) {
    return {
        type: SET_BOOKS,
        books: allBooks
    }
}

export function setGenres(allGenres) {
    return {
        type: SET_GENRES,
        genres: allGenres
    }
}

export function chooseGenre(genreType) {
    return {
        type: CHOOSE_GENRE,
        genreType: genreType
    }
}