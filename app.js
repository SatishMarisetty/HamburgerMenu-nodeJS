const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public'));
app.set('views', __dirname+'/views');
app.set('view engine','ejs');

app.get('/', function(req,res){
    res.render('index',{'text': 'hi'});
});

app.get('/about', function(req,res){
    res.render('index',{'title': 'About Us', 'text': 'We are Mighty Monks (sudoers of MonksOnDuty).'});
});

app.get('/contact', function(req,res){
    res.render('index',{'text':'Contact Us'});
});

app.get('/post', function(req,res){
    res.render('post');
});

app.post('/post', function(req,res){
    res.render('index',{'text':req.body.content});
});

app.listen(3000, function(){
    console.log('Server is alive');
});
