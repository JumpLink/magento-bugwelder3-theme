module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      custom: ['Gruntfile.js', '../../../skin/frontend/boilerplate/bugwelder3/js/bootstrap_navigation.js']
    },
    uglify: {
      development: {
        options: {
          beautify: true,
          preserveComments: 'all'
        },
        files: {
          '../../../skin/frontend/boilerplate/bugwelder3/js/scripts.js': [
            '../../../skin/frontend/boilerplate/default/js/script-ck.js',
            '../../../skin/frontend/boilerplate/bugwelder3/js/bootstrap_navigation.js'
          ]
        }
      },
      production: {
        files: {
          '../../../skin/frontend/boilerplate/bugwelder3/js/scripts.js': [
            '../../../skin/frontend/boilerplate/default/js/script-ck.js',
            '../../../skin/frontend/boilerplate/bugwelder3/js/bootstrap_navigation.js'
          ]
        }
      }
    },
    less: {
      development: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "../../../skin/frontend/boilerplate/bugwelder3/css/style.css": "../../../skin/frontend/boilerplate/bugwelder3/less/style.less"
        }
      },
      production: {
        options: {
          paths: ["assets/css"],
          yuicompress: true
        },
        files: {
          "../../../skin/frontend/boilerplate/bugwelder3/css/style.css": "../../../skin/frontend/boilerplate/bugwelder3/less/style.less"
        }
      }
    },
    watch: {
      less: {
        files: ["../../../skin/frontend/boilerplate/bugwelder3/less/*", "../../../skin/frontend/boilerplate/bugwelder3/components/bugwelder-bootstrap3/less/*"],
        tasks: ["less:development"]
      },
      js: {
        files: ["../../../skin/frontend/boilerplate/bugwelder3/js/bootstrap_navigation.js"],
        tasks: ["uglify:development", 'jshint:custom']
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', [
    'jshint:custom',
    'less:development',
    'uglify:development'
  ]);

  grunt.registerTask('production', [
    'jshint:custom',
    'less:production',
    'uglify:production'
  ]);
};