import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    author: String,
    title: String,
    price: Number,
    pages: Number,
    readedPage: Number,
    status: String,
    recommended: Boolean,
    lendedTo: String,
    purchaseDate: Date,
    publication: String,
    finishedDate: Date,
    startDate: Date,
    rating: Number,
    category: String,
    description: String
});


const Book = mongoose.model('book', bookSchema);

export default Book;