var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    gulp.src('sass/styles.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 30 versions']}))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
});

// Server
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "typescript.loc"
    });
});

gulp.task('watch', function() {
    gulp.watch('sass/**/*', ['sass']);
});


gulp.task('default', ['sass', 'browser-sync', 'watch']);
