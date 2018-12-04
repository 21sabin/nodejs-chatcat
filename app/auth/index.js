const passport = require('passport');
const config = require('../config/development');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../model/User')

const h = require('../helpers/index');

module.exports =()=>{
    //this method calls when authentication completes
//it is used to set the value of user in session so that it can be used in multiple routes
passport.serializeUser(( user ,done )=>{
    done( null, user.id)//user.id is not the goole send user id.its na mongoose create id
})

//after serialze call passport fetches the unique id from session and calls desirelize function
//it makes available of user data to the request stream
passport.deserializeUser(( id ,done )=>{
    h.findById(id).then(result=>done( null ,result)).catch(error=>console.log("error in deserialize"))
})
passport.use(new FacebookStrategy( {
    clientID: "2121255964792491",
    clientSecret:"182081e60824e6d21da5b58765603238",
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  } ,( accessToken , refreshToken , profile,cb )=>{
    console.log(profile,"profile");
    console.log(accessToken,"accesstoken")
    h.findUser(profile).then(result=>{
        if(result){
            done( null ,result );
        }else{
            //create a new uSer
            // h.createUser(profile).then(restul=>done( null , result)).catch(error=>console.log("error occur on createing user",error))
            const newUser = new User({
                profileId: profile.id,
                fullName: profile.displayName,
                profilePic:""
              });
            newUser.save((err)=>{
                if(err){
                    console.log("error on createing user")
                }
            })
        }
    })
    cb(null,profile)
}))
}
