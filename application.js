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

app.use(orm.express(process.env.DATABASE_URL, {
  define: function (db, models) {

    models.game = db.define("games", { 
      id         : { type: "number", defaultValue: undefined },
      name       : String,
      score      : Number,
      created_at : { type: "date", defaultValue: undefined }
    });

    models.mole = db.define("moles", { 
      id         : { type: "number", defaultValue: undefined },
      game_id    : Number,
      hole       : Number,
      hit        : Boolean
    });

  }
}));


app.use(app.router);

var index_action = function(req, res){
  res.render('index', { });
};

app.get('/', index_action);
app.get('/play', index_action);
app.get('/high_scores', index_action);
app.get('/game_over', index_action);

app.get( '/games', function (req, res) {
  req.models.game.find({}, 10, [ "score", "Z" ], function (err, games) {
    res.send(JSON.stringify(games));
  });
});

app.post('/games',function(req, res){
  console.log(req.body);
  req.models.game.create(
    req.body, 
    function (err, game) {
      res.send(JSON.stringify(err));
    }
  );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Whacking Moles on " + port);
});
