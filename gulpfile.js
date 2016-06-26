var gulp = require('gulp');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var del = require('del');
var exorcist = require('exorcist');
var browserify = require('browserify');
var tsify = require('tsify');
var uglifyJs = require('gulp-uglify');
var typescript = require('typescript');


gulp.task('clean', function() {
    return del(['build/*']); // if I remove the whole folder, exorcist fails silently.
});

gulp.task('compile', ['clean'], function() {
    return browserify({
            debug: true,
            standalone: 'dt'
        })
        .add('src/main.ts') // you can only have one entry file ('tsd.d.ts' moved to main.ts)
        .plugin(tsify) // TODO add { typescript: typescript }, but it doesn't work with 1.8.3 yet
        .bundle()
        .on('error', function (error) { console.error(error.toString()); })
        .pipe(exorcist('build/data-bundle.js.map'))
        .pipe(source('data-bundle.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.ts', ['compile']);
});

gulp.task('default', ['compile']);
