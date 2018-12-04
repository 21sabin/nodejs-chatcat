module.exports ={
    host:'http://localhost:3000',
    dbURI:'mongodb://sabin:chatcat21@ds043457.mlab.com:43457/chatapp',
    sessionSecret:'secretkey',
    "fb":{
        "ClientID":"5ea2796843fb068563c23d3dfac2c463",
        "ClientSecret":"182081e60824e6d21da5b58765603238",
        "callBackURL":'//localhost:3000/auth/facebook/callback',
        "profileFields":['id','displayName','photos']
    },
    "mail":{
        "ClientID":"973025605826-nh3sa7tno4uc8l3ejre87rd4i9go53n3",
        "ClientSecret":"5_zsUIaHAhARe4rb-bKpcccr",
        "RefreshToken" :" 1/PUcdJkE_U-mzmdEJMeuVQRDpssEjelWblAHM20mohOQ",
    }
}