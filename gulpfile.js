const gulp = require('gulp');
const source = require('vinyl-source-stream');
const del = require('del');
const exorcist = require('exorcist');
const browserify = require('browserify');
const tsify = require('tsify');
const typescript = require('typescript');

const VERSION = require('./package.json').version;

// This is for creating the browser bundle only

gulp.task('clean', () => {
    return del(['build/*']);
});

gulp.task('bundle', ['clean'], () => {
    return browserify({
            debug: true,
            standalone: 'Vector'
        })
        .add('src/bundle.ts')
        .plugin(tsify, { typescript: typescript })
        .bundle()
        .on('error', error => { console.error(error.toString()); })
        .pipe(exorcist('build/ts-vector-' + VERSION + '.js.map'))
        .pipe(source('ts-vector-' + VERSION + '.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('watch', () => {
    gulp.watch('src/**/*.ts', ['bundle']);
});

gulp.task('default', ['bundle']);
