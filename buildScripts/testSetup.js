// This file is not transpiled, so must use CommonJS and ES5

// Register  Babel to transpile before our tests run
require('babel-register')();

// Disable webpack features that Mocha don't understand
require.extensions['.css'] = function() {}
