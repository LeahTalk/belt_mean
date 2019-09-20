const controller = require('../controllers/controller.js');

const path = require("path");

module.exports = function(app) {

    app.get('/authors', (req, res) => {
        controller.index(req, res);
    });

    app.post('/authors', (req, res) => {
        controller.add_author(req, res);
    });

    app.get('/authors/:id', (req, res) => {
        controller.get_author(req, res);
    });

    app.delete('/authors/:id', (req, res) => {
        controller.remove_author(req, res);
    });

    app.put('/authors/:id/', (req, res) => {
        controller.update_author(req, res);
    });

    app.put('/quotes/:id', (req, res) => {
        controller.add_quote(req, res);
    });

    app.put('/delete_quote/:id', (req, res) => {
        controller.delete_quote(req, res);
    });

    app.put('/update_quote/:id', (req, res) => {
        controller.update_quote(req, res);
    }); 

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}