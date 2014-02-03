'use strict';
var npmview = require('./index');

npmview('is2', function(err, version, moduleInfo) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Version: ',version);
    console.log('Module description: ', moduleInfo.description);
    console.log('Module versions: ', moduleInfo.versions);
});
