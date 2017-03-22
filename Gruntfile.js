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

    /**
     * Sass compiling
     * @github.com/gruntjs/grunt-contrib-sass
     */
    sass: {

      dist: {
        options: {
          style: 'expanded'
        },

        files: [{
            expand: true,        // Enable dynamic expansion.
            cwd: 'templates',  // Src matches are relative to this path.
            src: ['*.scss'],     // Actual pattern(s) to match.
            dest: 'tidy/css',  // Destination path prefix.
            ext: '.css',         // Dest filepaths will have this extension.
        }]

      }
      
    },

    /**
     * Compress .jpg/.png
     * @github.com/gruntjs/grunt-contrib-imagemin
     */
    imagemin: {
      dist: {
        options: {
            optimizationLevel: 3,
            progressive: true
        },
        files: [{
          expand: true, // Enable dynamic expansion.
          cwd: 'static/images/', // Src matches are relative to this path.
          src: '{,*/}*.{png,jpg,jpeg}', // Actual pattern(s) to match.
          dest: 'static/images/', // Destination path prefix.
        }],
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
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('email', ['uncss', 'processhtml', 'premailer']);

  /**
   * Image Tasks
   * run `grunt images`
   */
  grunt.registerTask('images', [
    'imagemin',         // Compress jpg/jpeg + png files
  ]);
  
  grunt.registerTask('emailcss', ['uncss', 'processhtml', 'premailer']);
  grunt.registerTask('emailsass', ['sass', 'processhtml', 'premailer']);

};
