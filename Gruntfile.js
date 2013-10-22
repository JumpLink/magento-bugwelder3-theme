'use strict'; 
module.exports = function(grunt) {

  grunt.initConfig({
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', [
    'less'
  ]);
}