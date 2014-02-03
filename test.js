'use strict';
//var assert = require('assert');
var npmview = require('./index');
var inspect = require('util').inspect;
var semver = require('semver');

describe('npm view', function() {
    it('Should throw an exception for missing name argument', function(done) {
        try {
            npmview();
        } catch(err) {
            done();
        }
    });

    it('Should throw an exception for missing callback argument', function(done) {
        try {
            npmview('is2');
        } catch(err) {
            done();
        }
    });

    it('Should return valid data for a module in npm', function(done) {
        npmview('is2', function(err, version, moduleInfo) {
            if (err) {
                return done(err);
            }

            if (!moduleInfo) {
                return done(new Error('no module information received.'));
            }
            if (!semver.valid(version)) {
                return done(new Error('Invalid module version: '+version));
            }
            var description = 'A type checking library where each exported '+
                'function returns either true or false and does not throw. '+
                'Also added tests.';
            if (moduleInfo.description !== description) {
                return done(new Error('unexpected response: '+inspect(moduleInfo)));
            }

            done();
        });
    });
});
