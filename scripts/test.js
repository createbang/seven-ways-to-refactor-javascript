#!/usr/bin/env node

var sys = require('sys')
var _ = require('underscore')
var exec = require('child_process').exec;

var patterns = ['value', 'service', 'form', 'query', 'view', 'policy', 'decorator'];
var pattern = process.argv[2] || '';
var index = _.indexOf(patterns, pattern);

if (index >= 0) {
  exec(['./node_modules/mocha/bin/mocha ', 'test/0', (index + 1), '_', pattern, '.js'].join(''), function (error, stdout, stderr) {
    if (_.isNull(error)) {
      console.log(stdout);
    } else {
      console.error('Error: ', error);
    }
  });
} else {
  var usage = [
    'Usage: ./scripts/test.js {pattern}', "\n",
    'Patterns: [', patterns.join(', '), ']'
  ].join('');
  console.warn(usage);
}

