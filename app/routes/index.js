const express = require('express');
const router = require('express').Router();
const h = require('./../helpers');
const sendMail = require('../helpers/mail/mailConfig');
const passport  =require('passport')

module.exports =()=>{
    let routes = {
        'get':{
            '/':( req, res, next )=>{
                console.log("login")
                res.render('login')
            }  ,
            '/rooms':( req ,res ,next)=>{
                res.render('rooms')
            },
            '/getSession':( req,res,next )=>{
                res.send('Session:'+req.session.userid)
            },
            '/setSession':( req,res,next )=>{
               req.session.userid="user";
               console.log(req.session,"requ")
               res.send("Session is set")
            },
            '/auth/facebook':passport.authenticate('facebook'),
            '/auth/facebook/callback':passport.authenticate('facebook',{
                successRedirect:'/rooms',
                failureRedirect:'/'
            })
    
        },
        'post':{
            '/sendMail':( req ,res ,next)=>{
                
                sendMail();
            }
        }
    }
    
    return h.route(routes);
}



