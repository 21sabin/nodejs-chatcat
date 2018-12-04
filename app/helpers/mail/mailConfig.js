const nodemailer = require('nodemailer');
const config = require('../../config/development');
const { accessToken } = require('./oauthConfig');

const sendMail =()=>{
    const smtpTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
             type: "OAuth2",
             user: "support@alithias.com", 
             clientId: config.mail.ClientID,
             clientSecret: config.mail.ClientSecret,
             refreshToken:config.mail.RefreshToken,
             accessToken
        }
    });
    
    const mailOptions = {
        from: "support@alithias.com",
        to: "sabin@noveltytechnology.com",
        subject: "Node.js Email with Secure OAuth",
        generateTextFromHTML: true,
        html: "<b>test</b>"
    };
    
    smtpTransport.sendMail(mailOptions, (error, response) => {
        error ? console.log(error) : console.log(response);
        smtpTransport.close();
    });
}

module.exports=sendMail;

