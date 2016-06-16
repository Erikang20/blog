exports.seed = function( knex, Promise ) {
	return Promise.join(
		// Deletes ALL existing entries
		knex( 'users' ).del(),

		// Inserts seed entries
		knex( 'users' ).insert( {
			id: 1,
			name: 'taco',
			userName: 'taco1'
		} ),
		knex( 'users' ).insert( {
			id: 2,
			name: 'Max',
			userName: 'Maxim'
		} ),
		knex( 'users' ).insert( {
			id: 3,
			name: 'Tonny',
			userName: 'The tiger'
		} )
	);
};
