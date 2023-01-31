module.exports = function (grunt) {
	grunt.initConfig({
		package: grunt.file.readJSON('package.json'),
		uglify: {
			t1: {
				files: [
					{
						src: 'src/js/helper.js',
						dest: 'dist/assets/js/helper.js'
					},
				]

			},
		},

		clean: {
			html: ['local/*.html', 'local/secure/**', 'dist/*.html', 'dist/secure/**',]
		},

		htmlbuild: {
			out: {
				src: 'src/html/out/*.html',
				dest: 'local/',
				options: {
					beautify: false,
					sections: {
						layout: {
							head: 'src/layout/out/head.html',
							header: 'src/layout/out/header.html',
							footer: 'src/layout/out/footer.html',
							sidemenu: 'src/layout/out/sidemenu.html',
							mobilemenu: 'src/layout/out/mobile-menu.html',
							overlay: 'src/layout/out/overlay.html',
							script: 'src/layout/out/script.html',
						}
					},
				}
			},

			admin: {
				src: 'src/html/admin/*.html',
				dest: 'local/secure/admin/',
				options: {
					beautify: false,
					sections: {
						layout: {
							head: 'src/layout/out/head.html',
							header: 'src/layout/out/header.html',
							footer: 'src/layout/out/footer.html',
							sidemenu: 'src/layout/out/sidemenu.html',
							mobilemenu: 'src/layout/out/mobile-menu.html',
							overlay: 'src/layout/out/overlay.html',
							script: 'src/layout/out/script.html',
							navAdmin: 'src/layout/admin/navAdmin.html',
						}
					},
				}
			},
		},

		copy: {
			main: {
				files: [
					{
						expand: true, cwd: 'local/', src: ['index.html'], dest: 'local/secure/',
						rename: function (dest, src) {
							return dest + '/' + (src == 'index.html' ? 'home.html' : src);
						}
					},
				],
			},
		},

		replace: {

			localSecure: {
				options: {
					patterns: [
						{ match: /\.\.\/dist/g, replacement: '../../dist' },
						{ match: /s-check/g, replacement: 'j-winopen' },
						{ match: /pb-7/g, replacement: '' },
						{
							// Replace path / or index.html
							match: /href="(\/|index\.html)"/g,
							replacement: function () {
								return `href="home.html"`;
							}
						},
						{
							// Remove before login block
							match: /\s+?<!--\s+?keep:before_login\s+?-->[\s\S]*?<!--\s+?\/keep\s+?-->/gm,
							replacement: ''
						},
						{
							// keep content but remove comments
							match: /\s+?<!--\s+?keep:after_login\s+?-->([\s\S]*?)\s+?<!--\s+?\/keep\s+?-->/gm,
							replacement: '$1'
						},
					]
				},
				files: [
					{ expand: true, flatten: true, src: ['local/*.html', '!local/index.html', '!local/register.html', '!local/i-register.html', '!local/forgetpass.html'], dest: 'local/secure/' },
					{ expand: true, flatten: true, src: ['local/secure/home.html'], dest: 'local/secure/' },
				]
			},

			localBeforeLogin: {
				options: {
					patterns: [

						{
							// Remove after login block
							match: /\s+?<!--\s+?keep:after_login\s+?-->[\s\S]*?<!--\s+?\/keep\s+?-->/gm,
							replacement: ''
						},
						{
							// keep content but remove comments 
							match: /\s+?<!--\s+?keep:before_login\s+?-->([\s\S]*?)\s+?<!--\s+?\/keep\s+?-->/gm,
							replacement: '$1'
						},
					]
				},
				files: [{ expand: true, flatten: true, src: ['local/*.html'], dest: 'local/' }]
			},



			localAdmin: {
				options: {
					patterns: [
						{ match: /\.\.\/dist/g, replacement: '../../../dist' },
						{ match: /pb-7/g, replacement: '' },

						{
							// Replace path / or index.html
							match: /href="(\/|index\.html)"/g,
							replacement: function () {
								return `href="home.html"`;
							}
						},
						{
							match: /a href="([^"]*).html"/g,
							replacement: function (matchFile, link) {
								return `a href="../${link}.html"`;
							}
						},
						{
							match: /a href="..\/ADMIN__([^"]*).html"/g,
							replacement: function (matchFile, link) {
								return `a href="${link}.html"`;
							}
						},
						{
							// Remove before login block
							match: /\s+?<!--\s+?keep:before_login\s+?-->[\s\S]*?<!--\s+?\/keep\s+?-->/gm,
							replacement: ''
						},
						{
							// keep content but remove comments
							match: /\s+?<!--\s+?keep:after_login\s+?-->([\s\S]*?)\s+?<!--\s+?\/keep\s+?-->/gm,
							replacement: '$1'
						},
					]
				},
				files: [
					{ expand: true, flatten: true, src: ['local/secure/admin/*.html'], dest: 'local/secure/admin/' }
				]
			},

			beforeLogin: {
				options: {
					patterns: [
						{ match: /\.\.\/dist/gm, replacement: '/{cms.template.name}' },
						{ match: /aspect/g, replacement: 'aspect-[3/1]' },
						{
							match: /a href="([^"]*).html"/g,
							replacement: function (matchFile, link) {
								return `a href="/${link}.html"`;
							}
						},
						{
							// Remove on Prod
							match: /\s+?<!--\s+?delete:onProd\s+?-->[\s\S]*?<!--\s+?\/delete\s+?-->/gm,
							replacement: ''
						},
					]
				},
				files: [{ expand: true, flatten: true, src: ['local/*.html'], dest: 'dist/' }]
			},

			secure: {
				options: {
					patterns: [
						{ match: /\.\.\/\.\.\/dist/gm, replacement: '/{cms.template.name}' },
						{ match: /aspect/g, replacement: 'aspect-[3/1]' },
						{
							match: /a href="([^"]*).html"/g,
							replacement: function (matchFile, link) {
								return `a href="/secure/${link}.html"`;
							}
						},
						{
							// Remove on Prod
							match: /\s+?<!--\s+?delete:onProd\s+?-->[\s\S]*?<!--\s+?\/delete\s+?-->/gm,
							replacement: ''
						},
					]
				},
				files: [
					{ expand: true, flatten: true, src: ['local/*.html', '!local/index.html', '!local/register.html', '!local/i-register.html', '!local/forgetpass.html'], dest: 'dist/secure/' },
					{ expand: true, flatten: true, src: ['local/secure/home.html'], dest: 'dist/secure/' },
					{ expand: true, flatten: true, src: ['local/secure/*.html'], dest: 'dist/secure/' }
				]
			},

			admin: {
				options: {
					patterns: [
						{ match: /\.\.\/\.\.\/\.\.\/dist/gm, replacement: '/{cms.template.name}' },
						{
							match: /a href="([^"]*).html"/g,
							replacement: function (matchFile, link) {
								return `a href="/secure/admin/${link}.html"`;
							}
						},
						{
							match: /a href="\/secure\/admin\/\.\.\/([^"]*).html"/g,
							replacement: function (matchFile, link) {
								return `a href="/secure/${link}.html"`;
							}
						},
						{
							// Remove on Prod
							match: /\s+?<!--\s+?delete:onProd\s+?-->[\s\S]*?<!--\s+?\/delete\s+?-->/gm,
							replacement: ''
						},

					]
				},
				files: [
					{ expand: true, flatten: true, src: ['local/secure/admin/*.html'], dest: 'dist/secure/admin/' }
				]
			},
		},

		shell: {
			// ftp: {
			// 	command: [
			// 		'cd dist',
			// 		'git add *',
			// 		'git commit -m "update"',
			// 		'sleep .5',
			// 		'git ftp push',
			// 	].join('&&')
			// },

			tailwind: {
				command: ['npx tailwindcss -i ./src/css/style.css -o ./dist/assets/css/style.css'].join('&&')
			}

		},

		prettify: {
			options: {
				config: '.prettifyrc'
			},
			all: {
				expand: true,
				cwd: 'dist/',
				ext: '.html',
				src: ['*.html'],
				dest: 'dist/'
			},
			sc: {
				expand: true,
				cwd: 'dist/secure',
				ext: '.html',
				src: ['*.html'],
				dest: 'dist/secure'
			},
			admin: {
				expand: true,
				cwd: 'dist/secure/admin',
				ext: '.html',
				src: ['*.html'],
				dest: 'dist/secure/admin'
			}
		},

		watch: {
			files: [
				'src/js/*.js',
				'src/js/modules/*.js',

				'src/scss/*.scss',

				'src/html/out/*.html',
				'src/html/secure/*.html',
				'src/html/admin/*.html',
				'src/layout/out/*.html',
				'src/layout/secure/*.html',
				'src/layout/admin/*.html'
			],
			tasks: [/*'uglify', 'sass',*/'clean', 'htmlbuild', 'copy', 'replace', 'shell', 'prettify']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-html-build');
	grunt.loadNpmTasks('grunt-image');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-replace');
	grunt.loadNpmTasks('grunt-prettify');

	grunt.registerTask('default', ['watch']);
}; 