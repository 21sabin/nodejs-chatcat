
'use strict'
require('./auth')();

//create an instance of IO server
const ioserver = app =>{
    app.locals.chatrooms = []; //app level global variables available in all modules
    console.log(app.locals,"app")
    const server = require('http').Server( app );
    const io = require('socket.io')(server);
    io.use(( socket , next )=>{
        require('./session')( socket.request ,{} ,next ) //bridging express-session object to the socket
    })
    require('./socket')(io ,app);//all socket related code is written in socket folder
    return server;
}

module.exports = {
    router:require('./routes')(),
    session:require('./session'),
    ioserver
};
