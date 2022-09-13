"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var books = require('./data/books.json');
var Server = /** @class */ (function () {
    function Server() {
        this.express = express();
        this.middleware();
        this.routes();
        this.express.listen(3000, function () {
            console.log('Express server gestart op localhost:3000...');
        });
    }
    Server.prototype.middleware = function () {
        console.log('middleware called');
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(cors());
        this.express.use(express.static(__dirname + '/public'));
    };
    Server.prototype.routes = function () {
        console.log('routes called');
        var router = express.Router();
        router.get('/api/books', function (req, res, next) {
            res.json(books);
        });
        router.post('/api/order', function (req, res, next) {
            var order = req.body;
            console.log('Order ontvangen', order);
            // Doe iets met de order - opslaan in database, verder verwerken, etc.
            res.json({
                message: 'order ontvangen en wordt verwerkt...',
                order: order
            });
        });
        // Router toevoegen aan express-instantie
        this.express.use(router);
    };
    return Server;
}());
exports["default"] = new Server().express;
