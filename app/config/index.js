
if( process.env.NODE_ENV==='production'){
    module.exports ={
        host:process.env.host || '',
        dbURI:process.env.dbURI || '',
        sessionSecret:process.env.sessionSecret || '',
        clientID:process.env.clientID,
        clientSecret:process.env.clientSecret,
        callBackURI:process.env.host+'/auth/facebook/callback',
        profileFields:['id','displayName','photos']
    }
}else{
    module.exports = require('./development')
}