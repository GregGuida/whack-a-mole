var express = require('express');
var pg      = require('pg');
var orm     = require('orm');
// var models  = require('./models');
var modts   = require('orm-timestamps');

var app = express();
app.use(express.logger());

// map .renderFile to ".html" files
app.engine('html', require('ejs').renderFile);

// make ".html" the default
app.set('view engine', 'html');

// set views for error and 404 pages
app.set('views', __dirname + '/views');

// serve static files
app.use(express.static(__dirname + '/public'));

// parse request bodies (req.body)
app.use(express.bodyParser());

// app.use(orm.express("mysql://username:password@host/database", {
//   define: function (db, models, next) {
//     models.person = db.define("person", { ... });
//     next();
//   }
// }));

// orm.connect(process.env.DATABASE_URL, function(err, db) {
//     if (err) throw err;

//     db.use(modts, {
//         createdProperty: 'created_at',
//         modifiedProperty: 'modified_at',
//         dbtype: { type: 'date', time: true },
//         now: function() { return new Date(); },
//         persist: true
//     });

//     var user = db.define('user', {
//         username: String,
//         email: String,
//         password: String
//     }, {
//         timestamp: true
//     });
// });

// pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//   client.query('SELECT * FROM your_table', function(err, result) {
//     done();
//     if(err) return console.error(err);
//     console.log(result.rows);
//   });
// });

var index_action = function(req, res){
  res.render('index', {
    message: "SMACK!"
  });
};


app.use(app.router);
app.get('/', index_action);
app.get('/play', index_action);
app.get('/high_scores', index_action);

app.get('/games',function(req, res){
  // res.render('index', {
  //   message: "SMACK!"
  // });
});

app.post('/games',function(req, res){
  // res.render('index', {
  //   message: "SMACK!"
  // });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Whacking Moles on " + port);
});
