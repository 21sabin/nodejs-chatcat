module.exports ={
    host:'http://localhost:3000',
    dbURI:'mongodb://sabin:chatcat21@ds043457.mlab.com:43457/chatapp',
    sessionSecret:'secretkey',
    "fb":{
        "ClientID":"2121255964792491",
        "ClientSecret":"5ea2796843fb068563c23d3dfac2c463",
        "callBackURL":'//localhost:3000/auth/facebook/callback',
        "profileFields":['id','displayName','photos']
    }
}