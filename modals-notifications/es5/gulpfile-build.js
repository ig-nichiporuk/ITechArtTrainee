var gulp = require('gulp'),
	cleancss = require('gulp-clean-css');


gulp.task('html-build', function (done) {
	gulp.src('./src/*.html').pipe(gulp.dest('./dist/'));
	done();
});
gulp.task('css-build', function (done) {
	gulp.src('./src/css/**/*.css').pipe(cleancss( {level: { 1: { specialComments: 0 } } })).pipe(gulp.dest('./dist/css/'));
	done();
});
gulp.task('img-build', function (done) {
	gulp.src(['./src/img/*.*', '!./src/img/global_symbol_sprite.html']).pipe(gulp.dest('./dist/img/'));
	done();
});
gulp.task('fonts-build', function (done) {
	gulp.src('./src/fonts/*.*').pipe(cleancss( {level: { 1: { specialComments: 0 } } })).pipe(gulp.dest('./dist/fonts/'));
	done();
});
gulp.task('js-build', function (done) {
	gulp.src('./src/js/*.js').pipe(gulp.dest('./dist/js/'));
	done();
});


gulp.task('default', gulp.series('html-build', 'css-build', 'img-build', 'js-build',  'fonts-build'));
