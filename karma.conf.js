// Karma configuration
// Generated on Tue Aug 19 2014 15:05:32 GMT+0530 (IST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        //-------------------- Source Files ---------------------
        'app/bower_components/hammerjs/hammer.min.js',
        'app/bower_components/moment/min/moment.min.js',
        'app/bower_components/angularjs/angular.min.js',
        'app/bower_components/angular-mocks/angular-mocks.js',
        'app/bower_components/angular-animate/angular-animate.min.js',
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
        'app/components/common/TemperatureUnitFilter.js',
        // Tests
        'test/*.js'
    ],

    // list of files to exclude
    exclude: [
      
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
