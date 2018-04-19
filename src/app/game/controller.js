var express = require('express')
var app = express.Router();
var Game= require('./model');
var game= new game;

module.exports = app
    .get('/quotes', (req, res) => res.send(game.GetQuotes())) 
    .get( '/state', (request,response) => response.send(game) )
    .post('Picture', (req,res) => response.send(game.FlipPicture()) )



       