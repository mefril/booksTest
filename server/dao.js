const MongoClient = require('mongodb').MongoClient;

let mongoDB;
MongoClient.connect('mongodb://127.0.0.1:27017/library', function (err, db) {
    if (err) throw err;
    mongoDB = db;
    console.log('Connected to db2');
});

module.exports = {
    getData: () => {
        return new Promise((resolve, reject)=> {
            console.log('request to db is sent');
            let collection = mongoDB.collection('people');
            collection.find().toArray((err, result)=> {
                if (err) {
                    console.log('err');
                    reject(err);
                } else {
                    console.log('resolved');
                    resolve(result);
                }
            })
        })
    },
    getBooksByGenre: (genre)=> {
        let collection = mongoDB.collection('book');
        return collection.find({genre: genre}).toArray();
    },
    getBooksByAuthorId: (authorId)=> {
        let authorsBookscollection = mongoDB.collection('authorBook');
        let booksCollection = mongoDB.collection('book');
        return authorsBookscollection.find({authorId: authorId}).toArray().then((result)=> {
            if (result) {
                let booksIds = [];

                for (let i = 0, length = result.length; i < length; i++) {
                    booksIds.push(result.bookId);
                }
                return booksCollection.find({_id: {$in: booksIds}}).toArray();
            }
        })
    },
    getAllAuthors: ()=>{
        let collection = mongoDB.collection('author');
        return collection.find().toArray();
    },
    getAuthorById: (authorId)=>{
        let collection = mongoDB.collection('author');
        return collection.find({_id:authorId}).limit(1).next();
    },
    getBookById: (bookId)=>{
        let collection = mongoDB.collection('book');
        return collection.find({_id:bookId}).limit(1).next();
    }
};