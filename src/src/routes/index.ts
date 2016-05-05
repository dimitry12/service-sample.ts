import {Router} from 'express';

const index = Router();

/* GET home page. */
index.get('/', function(req, res, next) {
  res.json({
    "test": "ok"
  });
});

/* GET Quick Start. */
index.get('/quickstart', function(req, res, next) {
  res.render('quickstart');
});

export default index;
