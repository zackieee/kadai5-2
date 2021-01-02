var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('set-cookie', [
    'name2=hoge2; Domain=b044ab4a2c1d.ngrok.io; SameSite=None; Secure; HttpOnly',
  ]);

  res.render('index', {
     title: 'Express5-2',
     cookie: `${req.headers.cookie}`,
     host: `${req.headers.host}`
  });
});

module.exports = router;
