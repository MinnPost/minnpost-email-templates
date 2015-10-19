/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    uncss: {
      dist: {
        //src: ['templates/test1.html'],
        //dest: 'tidy/css/test1.css',
        files: [{
            expand: true,        // Enable dynamic expansion.
            cwd: 'templates',  // Src matches are relative to this path.
            src: ['*.html'],     // Actual pattern(s) to match.
            dest: 'tidy/css',  // Destination path prefix.
            ext: '.css',         // Dest filepaths will have this extension.
        }]
      }
    },
    processhtml: {
      dist: {
        files: {
          'tidy/test1.html': ['templates/test1.html']
        }
      }
    },
    premailer: {
      main: {
        options: {
          verbose: true
        },
        files: {
          'prod/test1.html': ['tidy/test1.html']
        }
      }
    },
    watch: {
      
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-premailer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('email', ['uncss', 'processhtml', 'premailer']);

};
