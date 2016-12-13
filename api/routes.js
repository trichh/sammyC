var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.post('/email', function(req, res) {
  var transporter = nodemailer.createTransport('smtps://tylerrichardwebdev%40gmail.com:3912330413ab@smtp.gmail.com');
  var mailOptions = {
    from: req.body.email,
    to: req.body.recipient,
    subject: req.body.subject,
    text: req.body.message
  }
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
});

module.exports = router;
