module.exports = function(grunt){

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        // outputStyle: 'compressed'
      },
      dist: {
        files: {
          'dist/css/style.css': 'sass/style.scss'
        }
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      },
      dist: {
        src: 'dist/css/*.css'
      }
    },

    uglify: {
      my_target: {
        files: {
          'dist/js/bundle.min.js': ['dist/js/bundle.js']
        }
      }
    },

    browserify: {
      'dist/js/bundle.js': ['js/app.js']
    },

    watch: {
      css:{
        files: ['sass/partials/*.scss', 'sass/*.scss'],
        tasks: ['sass', 'postcss'],
        options: {
          livereload: true,
          spawn: false
        }
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['browserify', 'uglify']
      }
    }

  });

  grunt.registerTask('default', ['']);

};