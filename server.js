// Requiring packages
var express = require('express');
var bodyParser = require('body-parser');

// Run express
var app = express();

// Use everything inside of public folder
app.use(express.static('public'));

// Send index.html on any route
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// Parses incoming requests under req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Use file that sends emails
app.use('/api', require('./api/routes.js'));

// Start server
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Server running on PORT: ', server.address().port);
});
