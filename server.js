// ======================
//  Dependencies
// ======================
var express = require('express'),
      app = express(),
      logger = require('morgan'),
      bodyParser = require('body-parser'),
      port = process.env.PORT || 2100;


// ======================
//  Middleware
// ======================
app.use(logger("dev"));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// ======================
//  Controllers
// ======================
var mainController = require('./controllers/main.js');
app.use('/main', mainController);


// ======================
//  Listener
// ======================
app.listen(port, function() {
  console.log('we are live on port ' + port);
});