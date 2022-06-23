//Mail sent here
var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport(
{
     service: ‘gmail’,
     host: ‘smtp.gmail.com’,
     secure: ‘true’,
     port: ‘465’,
     auth: {
          user: 'test2703@gmail.com',
          pass: 'yourpasswordTest123@'
     }
});

let mailOptions = {
            from: '"Your Name" <youremail@example.com>', // sender address
            to: 'myfriend@gmail.com, // list of receivers
            subject: 'Sending Email using Node.js', // Subject line
            text: 'Hello world', // plain text body
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
 }
