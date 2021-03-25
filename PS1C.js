var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'conrad.graham@ethereal.email',
      pass: 'QatJ6npfvc8HAhgVxR'
  }
})

var mailOptions = {
  from: 'conrad.graham@ethereal.email',
  to: 'haskell47@ethereal.email',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 