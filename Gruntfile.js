'use strict'; 
module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      development: {
        options: {
          beautify: true,
          preserveComments: 'all'
        },
        files: {
          '../../../skin/frontend/boilerplate/bugwelder3/js/scripts.js': [
            '../../../skin/frontend/boilerplate/default/js/script-ck.js'
          ]
        }
      },
      production: {
        files: {
          '../../../skin/frontend/boilerplate/bugwelder3/js/scripts.js': [
            '../../../skin/frontend/boilerplate/default/js/script-ck.js'
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
        files: ["../../../skin/frontend/boilerplate/bugwelder3/less/*", "../../../skin/frontend/boilerplate/bugwelder3/components/bugwelder-bootstrap3/less/*"],
        tasks: ["less:development"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', [
    'less:development',
    'uglify:development'
  ]);

  grunt.registerTask('production', [
    'less:production',
    'uglify:production'
  ]);
}