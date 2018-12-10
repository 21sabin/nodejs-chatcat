const express = require('express');
const chatCat = require('./app');
const passport = require('passport');

var app = express();


app.set('PORT',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'))

app.use(passport.initialize());
app.use(passport.session())

app.use(chatCat.session);
app.use('/',chatCat.router);



chatCat.ioserver(app).listen(app.get('PORT'),()=>{
    console.log('server started at 3000')
})