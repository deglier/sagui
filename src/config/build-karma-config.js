export default function buildKarmaConfig ({ projectPath, saguiPath }, { watch }, webpackConfig) {
  return {
    basePath: projectPath,

    frameworks: ['jasmine', 'phantomjs-shim', 'sinon'],
    browsers: ['PhantomJS'],

    files: [
      'src/**/*.spec.*',
      { pattern: 'src/**/*', watched: true, included: false }
    ],

    preprocessors: {
      // add webpack as preprocessor
      'src/**/*.spec.*': ['webpack']
    },

    webpack: webpackConfig,

    webpackServer: {
      noInfo: true
    },

    singleRun: !watch,

    autoWatch: watch
  }
}
