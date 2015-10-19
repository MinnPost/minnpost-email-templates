/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    uncss: {
      dist: {
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
        files: [{
          expand: true,     // Enable dynamic expansion.
          cwd: 'templates/',      // Src matches are relative to this path.
          src: ['**/*.html'], // Actual pattern(s) to match.
          dest: 'tidy/',   // Destination path prefix.
          ext: '.html',   // Dest filepaths will have this extension.
        }]
      }
    },
    premailer: {
      main: {
        options: {
          verbose: true
        },
        files: [{
          expand: true,     // Enable dynamic expansion.
          cwd: 'tidy/',      // Src matches are relative to this path.
          src: ['**/*.html'], // Actual pattern(s) to match.
          dest: 'prod/',   // Destination path prefix.
          ext: '.html',   // Dest filepaths will have this extension.
        }]
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
