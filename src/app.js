const express = require('express');
const app = express();
//const emojis = require('emojis-list');

//console.log ("hay "+emojis.length+" emojis");
///for (var i=0;i<300;i++)
//{     console.log("i+1:"+ emojis[i]);}

const path = require('path');

// settings 
app.set('port', process.env.PORT || 3000);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
module.exports = app;
