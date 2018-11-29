const express = require('express');
const router = require('express').Router();
const h = require('./../helpers');

module.exports =()=>{
    let routes = {
        'get':{
            '/':( req, res, next )=>{
                console.log("login")
                res.render('login')
            }  ,
            '/chatroom':( req ,res ,next)=>{
                res.render('chatroom')
            },
            '/getSession':( req,res,next )=>{
                res.send('Session:'+req.session.userid)
            },
            '/setSession':( req,res,next )=>{
               req.session.userid="user";
               console.log(req.session,"requ")
               res.send("Session is set")
            }
        }
    }
    
    return h.route(routes);
}



