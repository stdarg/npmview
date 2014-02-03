npmview
=======
A simple wrapper to programmatically use NPM to view a module's information.

## Installation

    npm install npmview

## Example Usage

    var npmview = require('npmview');
    npmview('is2', function(err, version, moduleInfo) {
        if (err) {
            console.error(err);
            return;
        }

        console.log('Version:',version);
        console.log('Module description:', moduleInfo.description);
        console.log('Module versions:', moduleInfo.versions);
    });

The above results in the following output:

    Version: 0.0.11
    Module description: A type checking library where each exported function returns either true or false and does not throw. Also added tests.
    Module versions: [ '0.0.1',
    '0.0.2',
    '0.0.3',
    '0.0.4',
    '0.0.5',
    '0.0.6',
    '0.0.7',
    '0.0.8',
    '0.0.9',
    '0.0.10',
    '0.0.11' ]

## API

### npmview(moduleName, cb)

Programmatically use npm's view command to get information on a module.

* **String** *moduleName* The module name for which you want the view information.
* **Function** *cb* The callback function, which has the following signature: cb(err, version, info)
    * **Error** *err* A Node.js error object, if defined, there was an error.
    * **String** *version* The current version of the module.
    * **Object** *info* The information on the module.

## License
The MIT License (MIT)

Copyright (c) 2014 Edmond Meinfelder

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

