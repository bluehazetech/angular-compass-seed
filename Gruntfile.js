// Generated on 2014-01-10 using generator-angular 0.7.1
'use strict';

// common globbing patterns
// '*'        matches any number of characters, but not /
// '?'        matches a single character, but not /
// '**'       matches any number of characters, including /, as long as it's the only thing in a path part
// '{}'       allows for a comma-separated list of "or" expressions
// '!'        at the beginning of a pattern will negate the match
// '/{,*/}*'  matches files one level down
// '/**/*'    recursively matches files in all subfolders

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // define project-specific settings (grunt templates)
        paths: {
            app: 'app',
            dist: 'dist',
            test: 'test',
            temp: '.tmp'
        },

        // empty folders to start fresh
        clean: {
            dist: ['<%= paths.dist %>', '<%= paths.temp %>'],
            dev: '<%= paths.temp %>'
        },

        // compile Sass to CSS and generate necessary files if requested
        compass: {
            options: {
                sassDir: '<%= paths.app %>/styles',
                imagesDir: '<%= paths.app %>/images',
                generatedImagesDir: '<%= paths.temp %>/images/generated',
                javascriptsDir: '<%= paths.app %>/scripts',
                fontsDir: '<%= paths.app %>/styles/fonts',
                cssDir: '<%= paths.temp %>/styles',
                importPath: '<%= paths.app %>/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false,
                noLineComments: false,
                assetCacheBuster: false,
                raw: 'Sass::Script::Number.precision = 10\n' // Use "raw" if option is not directly available
            },
            dev: {
                options: {
                    debugInfo: true
                }
            },
            dist: {
                options: {
                    environment: 'production',
                    generatedImagesDir: '<%= paths.dist %>/images/generated'
                }
            }
        },

        // run blocking tasks in parallel
        concurrent: {
            dev: [
                'compass:dev'
            ],
            test: [],
            dist: [
                'compass:dist',
                'imagemin',
                'svgmin'
            ]
        },

        // start static web server
        connect: {
            options: {
                port: 9000,
                livereload: 35729
            },
            dev: {
                options: {
                    open: true,
                    base: [
                        '<%= paths.temp %>',
                        '<%= paths.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= paths.dist %>'
                }
            },
            test: {
                options: {
                    port: 9001,
                    base: [
                        '<%= paths.temp %>',
                        '<%= paths.app %>',
                        'test'
                    ]
                }
            }
        },

        // copy files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= paths.app %>/',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        '*.html',
                        'views/{,*/}*.html',
                        'bower_components/**/*',
                        'images/{,*/}*.{webp}',
                        'fonts/*',
                        'spa/**/*',
                        'scripts/startSpa.js'
                    ],
                    dest: '<%= paths.dist %>'
                }, {
                    expand: true,
                    cwd: '<%= paths.temp %>/images/generated/',
                    src: ['**'],
                    dest: '<%= paths.dist %>/images/'
                }, {
                    expand: true,
                    cwd: '<%= paths.temp %>/styles/',
                    src: ['**'],
                    dest: '<%= paths.dist %>/styles/'
                }]
            }
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.app %>/images/',
                    src: '**/*.{png,jpg,jpeg,gif}',
                    dest: '<%= paths.dist %>/images/'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.app %>/images/',
                    src: '**/*.svg',
                    dest: '<%= paths.dist %>/images/'
                }]
            }
        },

        // allow the use of non-minsafe AngularJS files. automatically makes it
        // minsafe compatible so Uglify does not destroy the ng references
        ngmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= paths.temp %>/concat/scripts',
                        src: '*.js',
                        dest: '<%= paths.temp %>/concat/scripts'
                    }
                ]
            }
        },

        // ensure proper coding styles
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            dev: [
                '<%= paths.app %>/scripts/**/*.js'
            ],
            gruntfile: [
                'Gruntfile.js'
            ],
            test: [
                '<%= paths.test %>/spec/**/*.js'
            ]
        },

        // rename files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= paths.dist %>/scripts/{,*/}*.js',
                        '<%= paths.dist %>/styles/{,*/}*.css',
                        '<%= paths.dist %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%= paths.dist %>/styles/fonts/*'
                    ]
                }
            }
        },

        // read HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. create configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                root: '<%= paths.app %>',
                dest: '<%= paths.dist %>'
            },
            html: '<%= paths.app %>/**/*.html'
        },

        // perform rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: ['<%= paths.dist %>']
            },
            html: [
                '<%= paths.dist %>/**/*.html',
                '!<%= paths.dist %>/bower_components/**/*.html'
            ],
            css: ['<%= paths.dist %>/styles/{,*/}*.css']
        },

        // watch files for changes and run tasks based on the changed files
        watch: {
            options: {
                spawn: false,
                livereload: true
            },

            // clear the terminal window and run jshint on app javascript files
            jshint: {
                files: ['<%= paths.app %>/scripts/**/*.js'],
                tasks: ['clear', 'jshint']
            },

            // run Jasmine tests when test scripts are changed
            test: {
                files: ['<%= paths.test %>/spec/**/*.js'],
                tasks: ['jshint:test', 'karma']
            },

            // compile CSS when Sass files are changed
            compass: {
                files: ['<%= paths.app %>/styles/**/*.{scss,sass}'],
                tasks: ['compass:dev']
            },

            // run jshint on this Grunt configuration file
            gruntfile: {
                files: ['Gruntfile.js'],
                tasks: ['jshint:gruntfile']
            },

            // reload the browser when changes are made
            livereload: {
                files: [
                    '<%= paths.app %>/**/*.html',
                    '<%= paths.app %>/scripts/**/*.js',
                    '<%= paths.temp %>/styles/{,*/}*.css',
                    '<%= paths.app %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        }
    });



    // run development instance
    grunt.registerTask('dev', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['dist', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clear',
            'clean:dev',
            'concurrent:dev',
            'connect:dev',
            'watch'
        ]);
    });

    // build and deploy production instance
    grunt.registerTask('dist', [
        'clear',
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'concat',
        'ngmin',
        'uglify',
        'copy:dist',
        'rev',
        'usemin'
    ]);
};
