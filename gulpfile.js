var gulp = require('gulp'),
    path = require('path'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    processhtml = require('gulp-processhtml'),
    cleanhtml = require('gulp-cleanhtml'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifier = require('gulp-minifier'),
    imagemin = require('gulp-imagemin'),
    pngcrush = require('imagemin-pngcrush'),
    changed = require('gulp-changed');

gulp.task('less', function() {
    gulp
        .src('app/less/main.less')
        .pipe(changed('temp'))
        .pipe(less({compress: true}))
        .pipe(rename('temp.min.css'))
        .pipe(gulp.dest('temp'));

    gulp
        .src(['app/bower_components/normalize.css/normalize.css', 'temp/temp.min.css'])
        .pipe(concat('main.css'))
        .pipe(minifier({
            minify: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyJS: false,
            minifyCSS: true}))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('processjs', function () {
    gulp
        .src([
            'app/bower_components/hammerjs/hammer.min.js',
            'app/bower_components/moment/min/moment.min.js',
            'app/bower_components/angularjs/angular.min.js',
            // Open Weather Map
            'app/components/openweathermap/module.js',
            'app/components/openweathermap/ForecastService.js',
            // HammerJS
            'app/components/hammer/module.js',
            'app/components/hammer/touchEvents.js',
            // Common Stuff
            'app/components/common/app.js',
            'app/components/common/RightPaneController.js',
            'app/components/common/DatePrinterFilter.js',
            'app/components/common/RootController.js',
            'app/components/common/TemperatureDisplayController.js',
            'app/components/common/TemperatureUnitFilter.js'
            ])
        .pipe(changed('build/js'))
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('processhtml', function () {
    gulp
        .src('app/index.html')
        .pipe(changed('build'))
        .pipe(processhtml('index.html'))
        .pipe(cleanhtml())
        .pipe(gulp.dest('build'));
});

gulp.task('processimages', function () {
    gulp
        .src('app/img/**')
        .pipe(changed('build/img'))
        .pipe(imagemin({
            use: [pngcrush()],
            optimizationlevel: 10
        }))
        .pipe(gulp.dest('build/img'));
});

gulp.task('default', ['less', 'processjs', 'processhtml', 'processimages'], function () {

});