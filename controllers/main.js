var express = require('express'),
      router = express.Router();

router.get('/', function(req, res) {
  console.log('main.js main route works');
});

module.exports = router;