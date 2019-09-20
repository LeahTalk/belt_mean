const Author = require("../models/models.js");

module.exports = {
    index: function(req, res) {
        Author.find().sort({name: 1})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    add_author: function(req, res) {
        const author = new Author();
        author.name = req.body.name;
        author.save()
            .then(data => 
                res.json(data)
            )
            .catch(err => {
                res.json(err);
            })
    },

    remove_author : function(req, res) {
        Author.remove({'_id' : req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    get_author: function(req, res) {
        console.log(req.params.id)
        Author.findOne({'_id' : req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    update_author : function(req, res) {
        Author.update({"_id": req.params.id}, {$set: {
            name: req.body.name,
        }},{runValidators: true})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err);
        });  
    },

    add_quote : function(req, res) {
        Author.findOneAndUpdate({'_id' : req.params.id}, {$push: {quotes: req.body}}, {runValidators: true})
            .then(data =>
                res.json(data)
            )
            .catch(err => {
                res.json(err)
            })
    },

    delete_quote : function(req, res) {
        Author.findOneAndUpdate({'_id' : req.params.id}, {$pull: {'quotes' : req.body}})
        .then(data =>
            res.json(data)
        )
        .catch(err => {
            res.json(err)
        })
    },

    update_quote : function(req, res) {
        console.log(req.body);
        Author.findOneAndUpdate({'_id' : req.params.id, 'quotes._id' : req.body._id}, {$set: {'quotes.$.score' : req.body.score}})
        .then(data =>
            res.json(data)
        )
        .catch(err => {
            res.json(err)
        })
    }
}