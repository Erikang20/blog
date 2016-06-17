var environment = process.env.DATABASE_URL || 'postgres://wxeadxasfensap:AsTcsbv9a84cHEJecTCh_f6DAb@ec2-54-243-202-84.compute-1.amazonaws.com:5432/d2mrqonu8h6ek0';
var config = require( '../knexfile' )[ environment ];



module.exports = require( 'knex' )( config );
