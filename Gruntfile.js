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
							meta: 'src/layout/out/head-meta.html',
							style: 'src/layout/out/head-style.html',
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
			localCSS: {
				options: {
					patterns: [
						{
							match: /.indexcss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/indexcss.css") %>'
						},
						{
							match: /.aboutuscss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/aboutuscss.css") %>'
						},
						{
							match: /.contactcss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/contactcss.css") %>'
						},
						{
							match: /.faqcss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/faqcss.css") %>'
						},
						{
							match: /.fishcss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/fishcss.css") %>'
						},
						{
							match: /.gaplecss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/gaplecss.css") %>'
						},
						{
							match: /.hotcss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/hotcss.css") %>'
						},
						{
							match: /.i-registercss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/i-registercss.css") %>'
						},
						{
							match: /.livecasinocss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/livecasinocss.css") %>'
						},
						{
							match: /.mobilecss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/mobilecss.css") %>'
						},
						{
							match: /.otherscss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/otherscss.css") %>'
						},
						{
							match: /.pokercss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/pokercss.css") %>'
						},
						{
							match: /.promotionscss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/promotionscss.css") %>'
						},
						{
							match: /.policycss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/policycss.css") %>'
						},
						{
							match: /.registercss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/registercss.css") %>'
						},
						{
							match: /.responsible-gamingcss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/responsible-gamingcss.css") %>'
						},
						{
							match: /.slotscss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/slotscss.css") %>'
						},
						{
							match: /.sportsbookcss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/sportsbookcss.css") %>'
						},
						{
							match: /.tangkascss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/tangkascss.css") %>'
						},
						{
							match: /.tnccss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/tnccss.css") %>'
						},
						{
							match: /.togelcss{color:white}/gm,
							replacement: '<%= grunt.file.read("generated/togelcss.css") %>'
						},
					]
				},
				files: [{ expand: true, flatten: true, src: ['local/*.html'], dest: 'local/' }]
			},

			localSecure: {
				options: {
					patterns: [
						{ match: /\.\.\/dist/g, replacement: '../../dist' },
						{ match: /s-check/g, replacement: 'j-winopen' },
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
				command: ['npx tailwindcss -i ./src/css/style.css -o ./dist/assets/css/style.css --minify'].join('&&')
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
		},

		critical: {
			1: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/index.html',
				dest: 'generated/indexcss.css'
			},
			2: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/aboutus.html',
				dest: 'generated/aboutuscss.css'
			},
			3: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/contact.html',
				dest: 'generated/contactcss.css'
			},
			4: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/faq.html',
				dest: 'generated/faqcss.css'
			},
			5: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/fish.html',
				dest: 'generated/fishcss.css'
			},
			6: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/gaple.html',
				dest: 'generated/gaplecss.css'
			},
			7: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/hot.html',
				dest: 'generated/hotcss.css'
			},
			8: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/i-register.html',
				dest: 'generated/i-registercss.css'
			},
			9: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/livecasino.html',
				dest: 'generated/livecasinocss.css'
			},
			10: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/mobile.html',
				dest: 'generated/mobilecss.css'
			},
			11: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/others.html',
				dest: 'generated/otherscss.css'
			},
			12: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/poker.html',
				dest: 'generated/pokercss.css'
			},
			13: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/policy.html',
				dest: 'generated/policycss.css'
			},
			14: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/promotions.html',
				dest: 'generated/promotionscss.css'
			},
			15: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/register.html',
				dest: 'generated/registercss.css'
			},
			16: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/responsible-gaming.html',
				dest: 'generated/responsible-gamingcss.css'
			},
			17: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/slots.html',
				dest: 'generated/slotscss.css'
			},
			18: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/sportsbook.html',
				dest: 'generated/sportsbookcss.css'
			},
			19: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/tangkas.html',
				dest: 'generated/tangkascss.css'
			},
			20: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/tnc.html',
				dest: 'generated/tnccss.css'
			},
			21: {
				options: {
					base: './',
					css: [
						'dist/assets/css/fonts/css/all.min.css',
						'dist/assets/css/swiper-bundle.min.css',
						'dist/assets/css/style.css',
					],
				},
				src: 'dist/togel.html',
				dest: 'generated/togelcss.css'
			},
		},



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
	grunt.loadNpmTasks('grunt-critical');

	grunt.registerTask('default', ['watch']);
}; 