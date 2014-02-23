/*global module:false*/
module.exports = function (grunt) {
  'use strict';

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    concat: {
      options: {
        stripBanners: true
      },
      dist: {
        src: ['lib/{,*/}*.js'],
        dest: 'dist/<%= pkg.name %>.v<%= pkg.version %>.js.tmp'
      }
    },
    wrap: {
      js: {
        src: ['<%= concat.dist.dest %>'],
        dest: 'dist/<%= pkg.name %>.v<%= pkg.version %>.js',
        options: {
          wrapper: [
            "(function (window) {'use strict';",
            "})(window);"
          ]
        }
      },
      html: {
        src: ['<%= uglify.dist.dest %>'],
        dest: '<%= uglify.dist.dest %>.html',
        options: {
          wrapper: [
            '<script id="gaab" data-version="<%= pkg.version %>" data-docs="https://github.com/tomfuertes/gaab">',
            '</script>'
          ]
        }
      }
    },
    clean: {
      tmp: ['dist/*.tmp']
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= wrap.js.dest %>',
        dest: 'dist/<%= pkg.name %>.v<%= pkg.version %>.min.js'
      }
    },
    jshint: {
      options: grunt.file.readJSON('.jshintrc'),
      lib_test: {
        src: ['lib/{,*/}*.js']
      }
    },
    qunit: {
      all: ['test/test.html']
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      }
    },
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        updateConfigs: ['pkg'],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['-a'], // '-a' for all files
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: false,
        // pushTo: 'upstream',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
      }
    },
    changelog: {
      options: {
        // Task-specific options go here.
      }
    }
  });



  // Default task.
  grunt.registerTask('default', [
    'qunit', 'concat', 'wrap:js', 'clean:tmp', 'uglify', 'wrap:html'
  ]);

  // Specific tasks
  grunt.registerTask('test', ['qunit']);
  grunt.registerTask('hint', ['jshint']);

};
