// Requiring packages
var express = require('express');

// Run express
var app = express();

// Use everything inside of public folder
app.use(express.static('public'));

// Send index.html on any route
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// Start server
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Server running on PORT: ', server.address().port);
});
