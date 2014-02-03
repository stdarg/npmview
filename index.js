'use strict';
module.exports = view;
var have = require('have');
var npm = require('npm');
var asyncerr = require('async-err');
var inspect = require('util').inspect;
var semver = require('semver');

function view(name, cb) {
    have(arguments, { name: 'string', cb: 'function' });

    if (!name.length)
        return asyncerr(new Error('Bad name parameter, empty string.', cb));

    npm.load({ loglevel: 'silent' }, function (err) {
        // A hack to shut the NPM registry the hell up.
        if (npm && npm.registry && npm.registry.log && npm.registry.log.level)
            npm.registry.log.level = 'silent';

        if (err) return cb(err);

        var silent = true;      // make npm not chatty on stdout
        npm.commands.view([name], silent, function (err, data) {
            if (err) return cb(err);
            if (!data) return cb(new Error('No data received.'));

            for (var p in data) {
                if (!data.hasOwnProperty(p) ||!semver.valid(p))
                    continue;
                return cb(null, p, data[p]);
            }
            return cb(new Error('Bad data received: '+inspect(data)));
        });
    });
}
