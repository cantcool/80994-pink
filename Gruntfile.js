"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  var config = {
    pkg: grunt.file.readJSON("package.json"),

    csscomb: {
      style: {
        expand: true,
        src: ["source/sass/**/*.scss"]
      }
    },

    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "source",
          src: [
            "img/**",
            "index.html",
            "form.html"
          ],
          dest: "build"
        }]
      }
    },

    sass: {
      style: {
        files: {
          "build/css/style.css": "source/sass/style.scss"
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'IE 9']})
        ]
      },
      style: {
        src: "build/css/*.css"
      }
    },

    cmq: {
      style: {
        files: {
          "build/css/style.css" : "build/css/style.css"
        }
      },
    },

    cssmin: {
      options: {
        keepSpecialComments: 0
      },
      style: {
        files: {
          "build/css/style.min.css" : "build/css/style.css"
        }
      },
    },

    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,gif,svg}"]
        }]
      }
    },

    concat: {
      main: {
        src: ["source/js/**/*.js"],
        dest: "build/js/scripts.js"
      }
    },

    uglify: {
      main: {
        files: {
          "build/js/scripts.min.js": "build/js/scripts.js"
        }
      }
    },

    watch: {
      style: {
        files: ["source/sass/**/*.scss"],
        tasks: ["sass", "postcss"],
        options: {
          spawn: true,
          livereload: true
        }
      }
    }
  };

  grunt.registerTask("build", [
    "csscomb",
    "copy",
    "sass",
    "postcss",
    "cmq",
    "cssmin",
    "concat",
    "uglify",
    "imagemin"
  ]);



  // Не редактируйте эту строку
  config = require("./.gosha")(grunt, config);

  grunt.initConfig(config);
};
