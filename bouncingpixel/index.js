var express = require('express'),
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('*', function(req, res) {
   res.sendFile(path.join(process.cwd()+'/public/index.html'));
});

app.listen(port, function(err){
    console.log("running server on from gulp port:::::::"+port);
});
