const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const config = require('../../config/development');
let accessToken;
const oauth2Client = new OAuth2(
    config.mail.ClientID,
    config.mail.ClientSecret,
    "https://developers.google.com/oauthplayground"
)

oauth2Client.setCredentials({
    refresh_token:config.mail.RefreshToken
});

oauth2Client.refreshAccessToken().then(tokens=>{
    accessToken = tokens.credentials.access_token;
}).catch(err=>console.log("error in getting token",err))


module.exports={
    accessToken
}