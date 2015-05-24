/* global module:false */
module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        jshint: {
            all: {
                options: {
                    jshintrc: ".jshintrc"
                },

                src: ['Gruntfile.js', '*.js']
            }
        },
        uglify: {
            loadCSS : {
                options: {
                    preserveComments: 'some',
                    mangle: false,
                    beautify: false,
                    },            
                   files: { 'dest/loadCSS.min.js': 'loadCSS.js'}
            },
            onloadCSS : {
                options: {
                    mangle: false,
                    beautify: false,
                    },           
                files: { 'dest/onloadCSS.min.js': 'onloadCSS.js'}
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default' , ['jshint', 'uglify']);
    grunt.registerTask('minimize' , ['uglify']);
};
