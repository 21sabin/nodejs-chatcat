const express = require('express');
const chatCat = require('./app')

var app = express();

app.set('PORT',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'))

app.use(chatCat.session)
app.use('/',chatCat.router)

app.listen(app.get('PORT'),()=>{
    console.log('server started at 3000')
})