var express = require("express")
var app = express();
var nodemailer = require('nodemailer')
var bodyParser = require('body-parser');
var sendMail = require('./mail');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// rendering indexpage.
app.get("/", function(req, res){
	res.render("index.ejs");
});

// Makes CSS file Active
app.use(express.static('public'));

// Getting email information for javascript file
app.post('/email', function(req, res){
	const {email, list } = req.body;
	console.log('data: ', req.body);
 res.json({message: 'message receieved'})
	
	  sendMail(email,list, function(err, data) {
        if (err) {
          res.status(500).json({ message: 'Internal Error' });
        } else {
            res.status({ message: 'Email sent!!!' });
        }
    });
});


// Linking server
app.listen(4000, function() { 
  console.log('Server listening on port 4000'); 
});
