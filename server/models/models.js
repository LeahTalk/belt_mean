const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean_belt', {useNewUrlParser: true});

const SkillSchema = new mongoose.Schema({
    title: {type: String, default: ""},
    }, {timestamps: true});

const PetSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Pet name is required!"], minlength : [3, "A pet name must be at least 3 characters!"]},
    type: {type: String, required: [true, "Type of pet is required!"], minlength : [3, "Type must be at least 3 characters!"]},
    description: {type: String, required: [true, "Pet Description is required!"], minlength : [3, "Description must be at least 3 characters!"]},
    likes: {type: Number, default: 0},
    skills: [SkillSchema]
    }, {timestamps: true});


const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
