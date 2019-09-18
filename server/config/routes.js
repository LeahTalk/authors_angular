const controller = require('../controllers/controller.js');

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
}