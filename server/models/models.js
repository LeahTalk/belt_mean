const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean_belt', {useNewUrlParser: true});

const QuoteSchema = new mongoose.Schema({
    content: {type: String, required: [true, "Quote is required!"], minlength : [3, "Quote must be at least 3 characters!"]},
    score: {type: Number, default: 0}
});

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name must be at least 3 characters!"], minlength: 3},
    quotes: [QuoteSchema]
    }, {timestamps: true});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
