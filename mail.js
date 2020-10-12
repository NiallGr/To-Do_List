const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
        auth: {
            api_key: '*************************', // use mailgun
            domain: '************************' // use mailgun
        }
    };


var transporter = nodemailer.createTransport(mailGun(auth));

var sendMail = ( email, list, cb) => {
    const mailOptions = {
        // sender: name,
        from: "***********", //// add your own email 
        to: email,
        subject: "Here is Today's To-do List, Lets Get it done!!",
        text: list
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}


// Exporting the sendmail
module.exports = sendMail;
