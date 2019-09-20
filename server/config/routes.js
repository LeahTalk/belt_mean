const controller = require('../controllers/controller.js');

const path = require("path");

module.exports = function(app) {

    app.get('/get_pets', (req, res) => {
        controller.index(req, res);
    });

    app.post('/add_pet', (req, res) => {
        controller.add_pet(req, res);
    });

    app.get('/check_pet_name/:name', (req,res) => {
        controller.check_name(req,res);
    });

    app.get('/get_pet/:id', (req, res) => {
        controller.get_pet(req, res);
    });

    app.delete('/delete_pet/:id', (req, res) => {
        controller.remove_pet(req, res);
    });

    app.put('/update_pet/:id', (req, res) => {
        controller.update_pet(req, res);
    });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}