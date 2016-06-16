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


//new users
router.get( '/new', function( req, res ) {
	res.render( 'new' );
} );


///post to users
router.post( '/', function( req, res ) {
	var user = req.body;
	// eval( locus )
	knex( 'users' ).insert( {
		name: user.name,
		userName: user.nickname
	} ).then( function( result, err ) {
		res.redirect( '/users' );
	} );
} );

router.get( '/:id', function( req, res ) {
	var userId = req.params.id;

	knex( 'users' ).where( 'id', userId ).first().then( function( result, err ) {
		var user = result;
		res.render( 'users/index' );
	} );
} );

module.exports = router;
