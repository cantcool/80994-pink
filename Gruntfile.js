"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  var config = {
    pkg: grunt.file.readJSON("package.json"),

    sass: {
      style: {
        files: {
          "css/style.css": "sass/style.scss"
        }
      }
    },

    postcss: {
      options: {
        processors: [
          //require("autoprefixer")({browsers: "last 2 versions"})
          require("autoprefixer")({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'IE 9']})


          //browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'IE 9']
        ]
      },
      style: {
        src: "css/*.css"
      }
    },

    watch: {
      style: {
        files: ["sass/**/*.scss", "**/*.html"],
        tasks: ["sass", "postcss"],
        options: {
          spawn: true,
          livereload: true
        }
      }
    }
  };



  // Не редактируйте эту строку
  config = require("./.gosha")(grunt, config);

  grunt.initConfig(config);
};
