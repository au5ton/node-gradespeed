/*
** node-gradespeed
**
** https://github.com/au5ton/node-gradespeed
**
*/

'use strict';


require('ssl-root-cas/latest')
.inject();

var fs = require('fs');

module.exports.auth = require('./lib/auth.js');
module.exports.constants = require('./lib/constants.js');

//Creates common preferences folder
try {
    fs.mkdirSync(module.exports.constants.APP_PREFS);
} catch(e) {
    if ( e.code != 'EEXIST' ) throw e;
}
