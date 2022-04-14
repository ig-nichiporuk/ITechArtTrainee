var gulp = require('gulp'),
	sass = require('gulp-sass')(require('sass')),
	browserSync = require('browser-sync').create(),
	svgSprite = require('gulp-svg-sprites'),
	svgmin = require('gulp-svgmin'),
	cheerio = require('gulp-cheerio'),
	replace = require('gulp-replace'),
	autoprefixer = require('gulp-autoprefixer'),
	del = require('del'),
	sourcemaps = require('gulp-sourcemaps');


gulp.task('serve', function(done) {
	browserSync.init({
		server: "src/"
	});
	gulp.watch("src/media/**/*", gulp.series('clear-img', 'img-src', 'svgSpriteCol', 'svgSpriteBuild'));
	gulp.watch("src/js/**/*").on('change', browserSync.reload);
	gulp.watch("src/sass/**/*", gulp.series('clear-css', 'sass', 'css-src'));
	gulp.watch("src/*.html").on('change', browserSync.reload);
	done();
});

gulp.task('sass',  function(done){ //Создаём таск "sass"
	gulp.src(['src/sass/**/*.sass','src/sass/**/*.scss']) //Берём источник
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
		.pipe(autoprefixer(['last 2 versions', /*'> 1%',*/ /*'ie 8', 'ie 7'*/], { cascade: true }))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.stream());
	done();
});

gulp.task('svgSpriteBuild', function (done) {
	gulp.src('./src/media/svg-mono/*.svg')
		.pipe(svgmin({
			js2svg: {
				pretty: true
			},
			plugins: [{
				removeTitle: true
			}]
		}))
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[style]').removeAttr('style');
				$('[title]').removeAttr('title');
			},
			parserOptions: { xmlMode: true }
		}))
		.pipe(replace('&gt;', '>'))
		.pipe(svgSprite({
				mode: "symbols",
				padding: "0",
				preview: false,
				svg: {
					symbols: './sprite-mono.svg'
				}
			}
		))
		.pipe(gulp.dest('src/img'));
	done();
});

gulp.task('svgSpriteCol', function (done) {
	gulp.src('./src/media/svg-color/*.svg')
		.pipe(svgSprite({
				mode: "symbols",
				preview: false,
				svg: {
					symbols: './sprite-color.svg'
				}
			}
		))
		.pipe(gulp.dest('src/img'));
	done();
});

gulp.task('css-src', function (done) {
	gulp.src('./src/sass/**/*.css').pipe(gulp.dest('./src/css/'));
	done();
});

gulp.task('img-src', function (done) {
	gulp.src(['./src/media/*.*', './src/media/global/*.*']).pipe(gulp.dest('./src/img/'));
	done();
});

gulp.task('clear-css', function (done) {
	done();
	del(['./src/css/*.*', './src/css/global/*.*']);
});

gulp.task('clear-img', function (done) {
	del(['./src/img/*']);
	done();
});


gulp.task('default', gulp.series('css-src', 'img-src', 'svgSpriteCol', 'svgSpriteBuild', 'sass', 'serve'));
