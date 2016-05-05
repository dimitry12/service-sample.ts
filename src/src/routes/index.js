"use strict";
var express_1 = require('express');
var index = express_1.Router();
/* GET home page. */
index.get('/', function (req, res, next) {
    res.json({
        "test": "ok"
    });
});
/* GET Quick Start. */
index.get('/quickstart', function (req, res, next) {
    res.render('quickstart');
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = index;
//# sourceMappingURL=index.js.map