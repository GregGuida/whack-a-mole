var pg = require('pg');
var connectionString = process.env.DATABASE_URL;
var client = new pg.Client(connectionString); 

client.connect();

var query = client.query("              \
  CREATE TABLE games (                  \
    id bigserial primary key,           \
    name varchar(20) NOT NULL,          \
    score integer NOT NULL,             \
    created_at timestamp default CURRENT_TIMESTAMP   \
  );                                    \
");

var query = client.query("        \
  CREATE TABLE moles (            \
    id bigserial primary key,     \
    game_id varchar(20) NOT NULL, \
    hole integer NOT NULL,        \
    hit boolean default NULL      \
  );                              \
");
