// import nodemailer
const nodemailer = require('nodemailer');
const config = require('./config');

// create a router 
const router = function(api){
    api.post('/test', function(req, res){

        // retrieve form data
        var email = req.body.email;
        var subject = req.body.subject;
        var Msg = req.body.Msg;

        // step 1: create a transporter
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            auth: {
                    type: 'oAuth2',
                    user: config.USER,
                    clientId: config.CID,
                    clientSecret: config.SECRET,
                    refreshToken: config.TOKEN      
            }
        })

        // step 2: set the mail options
        let mailOptions = {
            from: 'Ahmed Ismail <abokahfa@gmail.com>',
            to : email,
            subject: subject,
            text: Msg
        }

        // step 3: send the email
        transporter.sendMail(mailOptions, function(err, data){
            if(err){
                console.log("couldn't send email", err)
                res.send("Couldn't send email\n"+err)
            } else{
                console.log("Email Sent")
                res.status(200).send("Email Sent!!");
            }
        })
        
    });
}

module.exports = router;