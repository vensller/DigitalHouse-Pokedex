var express = require('express');
var router = express.Router();

// MVC = MODEL / VIEW / CONTROLLER

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.cookies);
  res.render('index', { title: 'Express', darkMode: req.session.darkMode });
});

router.get('/dark-mode', function(req, res) {
  req.session.darkMode = !req.session.darkMode;

  res.cookie('darkMode', req.session.darkMode, {
    maxAge: 86400    
  });
  
  res.redirect('/');
});

// router.get('/legendaries')

module.exports = router;
