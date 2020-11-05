var connect = require( 'gulp-connect' );

// Export functions
exports.server = server;

// Start server w/ live reload
function server( done ) {
	connect.server( {
		port: 8000,
		root: 'dist/',
		livereload: true,
	} );

	done();
}
