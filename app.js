var express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
var cors = require('cors');
const TypedError = require('errorHandler');

var dotenv = require('dotenv');
dotenv.config();




var app = express();

app.use(cors({
    allowedHeaders: 'Content-Type,Authorization,X-Access-Token',
    credentials: true,
    origin: true,
  }));


// body parser middleware
app.use(express.json());
app.use(express.urlencoded( { extended: false } )); // this is to handle URL encoded data
// end parser middleware


// custom middleware to log data access
const log = function (request, response, next) {
	console.log(`${new Date()}: ${request.protocol}://${request.get('host')}${request.originalUrl}`);
	console.log(request.body); // make sure JSON middleware is loaded first
	next();
}
app.use(log);
// end custom middleware



exports.contact = function (req, res, next) {
    const { firstname, lastname, email, message } = req.body;

    req.checkBody('email', 'email is required').notEmpty();
    req.checkBody('firstname', 'firstname is required').notEmpty();
    req.checkBody('lastname', 'lastname is required').notEmpty();
    req.checkBody('message', 'message is required').notEmpty();

    let missingFieldErrors = req.validationErrors()
    if (missingFieldErrors) {
      let err = new TypedError('contact error', 400, 'missing_field', {
        message: 'Missing Fields !',
        errors: missingFieldErrors,
      })
      return next(err);
    }

    req.checkBody('email', 'invalid email').isEmail();

    let invalidFieldErrors = req.validationErrors()
    
    if (invalidFieldErrors) {
        let err = new TypedError('contact error', 400, 'invalid_field', {
        message: 'Email invalide !',
        errors: invalidFieldErrors,
        })
        return next(err);
	}
}





// HTTP POST
app.post('/postInfo', function(request, response) {
	console.log('post');

  // create reusable transporter object using the default SMTP transport
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		service: 'gmail',
		port: 465,
		secure: true,
		auth: {
			user: process.env.EMAIL,
            pass: process.env.PASSWORD, 
		}
	});

	var textBody = `FROM: ${request.body.firstname} + ${request.body.lastname} EMAIL: ${request.body.email} MESSAGE: ${request.body.message}`;
	var htmlBody = `<h2>Mail From Contact Form</h2><p>from: ${request.body.firstname} + ${request.body.lastname}  <a href="mailto:${request.body.email}">${request.body.email}</a></p><p>${request.body.message}</p>`;
	var mail = {
		from: request.body.email, // sender address
		to: process.env.EMAIL, // list of receivers (THIS COULD BE A DIFFERENT ADDRESS or ADDRESSES SEPARATED BY COMMAS)
		subject: "Mail From Contact Form", // Subject line
		text: textBody,
		html: htmlBody
	};

	// send mail with defined transport object
	transporter.sendMail(mail, function (err, info) {
		if(err) {
			console.log(err);
			response.json({ message: "message not sent: an error occured; check the server's console log" });
		}
		else {
			response.json({ message: `message sent: ${info.messageId}` });
		}
	});
}); 


// set port from environment variable
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));