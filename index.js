var express=require('express');
var controller=require('./controllers/controller');
var app=express();

app.set('view engine','ejs');

app.use(express.static('./public'));

controller(app);
app.listen(5000 );
console.log("You are listening to port 3000");


