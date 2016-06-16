module.exports = {

	development: {
		client: 'postgresql',
		connection: 'postgres://localhost/blog'
	},

	production: {
		client: 'postgresql',
		connection: process.env.DATABASE_URL
	}

}
