var express = require( 'express' );
var router = express.Router();
var knex = require( '../db/knex' );
var methodOverride = require( 'method-override' );


////show homepage
router.get( '/', function( req, res ) {
	knex( 'users' ).then( function( result, err ) {
		console.log( result );
		res.render( 'index', {
			users: result
		} );
	} );
} );

module.exports = router;
