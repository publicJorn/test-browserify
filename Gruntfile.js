'use strict';

module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		watch: {
			options: {
				spawn: false,
				livereload: true
			},
			js: {
				files: [
					'js/*.js'
				],
				tasks: ['browserify']
			}
		},

		browserify: {
			options: {
				debug: true,
			},

			dev: {
				src: ['js/main.js'],
				dest: 'js/build/bundle.js'
			},

			standalone: {
				options: {
					bundleOptions: {
						standalone: 'sa'
					}
				},
				files: {
					'js/build/standalone.js': 'js/standalone.js'
				}
			}// ,

			// production: {
			// 	options: {
			// 		debug: false
			// 	},
			// 	src: '<%= browserify.dev.src %>',
			// 	dest: 'js/build/bundle.js'
			// }
		}
	});

	grunt.registerTask('serve', [
		'browserify',
		'browserify',
		'watch'
	]);

	grunt.registerTask('default', 'serve');
};