'use strict';

module.exports = function (grunt) {
    var watch_html = '*.html',
        watch_css = 'css/*.css',
        watch_js = 'js/*.js';

    grunt.initConfig({
        watch: {
            livereload: {
                files: [watch_html, watch_css, watch_js],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch:livereload']);
};