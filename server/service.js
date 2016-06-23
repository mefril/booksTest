const dao = require('./dao');

const getAllAuthors = () => {
    return dao.getAllAuthors();
};
const getAuthorById = (authorId) => {
    return dao.getAuthorById(authorId);
};
const getBooksByAuthor = (authorId) => {
    return dao.getBooksByAuthorId(authorId);
};
const getBookById = (bookId) => {
    return dao.getBookById(bookId);
};
const getBooksByGenre = (genre) => {
    return dao.getBooksByGenre(genre);
};

module.exports = {
    getData: (type, param)=> {
        switch (type) {
            case 'allAuthors':
                return getAllAuthors();
            case 'authorsById':
                return getAuthorById(param);
            case 'booksByAuthor':
                return getBooksByAuthor(param);
            case 'bookById':
                return getBookById(param);
            case 'booksByGenre':
                return getBooksByGenre(param);
            default:
                return new Promise((resolve, reject)=> {
                    resolve(null);
                })
        }
    }
}