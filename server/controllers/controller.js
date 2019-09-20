const Pet = require("../models/models.js");

module.exports = {
    index: function(req, res) {
        Pet.find().sort({type: 1})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    add_pet: function(req, res) {
        const pet = new Pet();
        pet.name = req.body.name;
        pet.type = req.body.type;
        pet.description = req.body.description;
        pet.skills = req.body.skills;
        pet.save()
            .then(data => 
                res.json(data)
            )
            .catch(err => {
                res.json(err);
            })
    },

    check_name : function(req, res) {
        Pet.findOne({'name' : req.params.name})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    remove_pet : function(req, res) {
        Pet.remove({'_id' : req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    get_pet: function(req, res) {
        console.log(req.params.id)
        Pet.findOne({'_id' : req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    update_pet : function(req, res) {
        Pet.update({"_id": req.params.id}, {$set: {
            name: req.body.name,
            type: req.body.type,
            description: req.body.description,
            skills: req.body.skills,
            likes: req.body.likes,
        }},{runValidators: true})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err);
        });  
    },
}