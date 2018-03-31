
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile('/public/index.html');
});

app.get('/about', function(req,res){
res.sendFile(__dirname+'/public/pages/about.html');
});


app.get('/sponsors', function(req,res){
    res.sendFile(__dirname+'/public/pages/sponsors.html');
    });

    
app.get('/portfolio', function(req,res){
    res.sendFile(__dirname+'/public/pages/portfolio.html');
    });

app.listen(3000, () => console.log('app running on port 3000'));