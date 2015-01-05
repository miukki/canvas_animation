module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

	grunt.registerMultiTask('title', 'description', function() {
      grunt.util.async.forEach(this.filesSrc, function(file, next) {console.log(file)}, this.async());
  });

  grunt.initConfig({

    title: {
      filesSrc: './assets'
    },

		connect: {
      server: {
        options: {
  			hostname: 'new.local',
        port: 9001,
        base: '.',
  			keepalive: true
        }
      }
		},

		//syntax
		jshint: {
      files: ['scripts/main.js', 'scripts/**/*.js'],
      options: {
        globals: {
          console: true,
          module: true,
          document: true
        }
      }
    },

		requirejs: {
			options: {
				baseUrl: '.',
				nextame: 'main',
				out: 'build/app.js'
			}
		},

		pkg: grunt.file.readJSON('package.json'),

  });

  //tasks task
  grunt.registerTask('default', ['jshint', 'imagemin', 'less']);
};
