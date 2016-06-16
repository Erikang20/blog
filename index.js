var express = require( 'express' ),
	app = express(),
	morgan = require( 'morgan' ),
	methodOverride = require( 'method-override' ),
	bodyParser = require( 'body-parser' );

require( 'locus' );


app.set( 'view engine', 'ejs' );
app.set( 'views', ( __dirname + '/views' ) );
app.use( express.static( __dirname + '/public' ) );
app.use( morgan( 'dev' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
	extended: false
} ) );
app.use( methodOverride( '_method' ) );

var usersRoute = require( './routes/users' );
app.use( '/users', usersRoute );



app.listen( 3000, function() {
	console.log( "Im listening" );
} );

module.exports = {
	app
};
