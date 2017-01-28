/*
** node-gradespeed
**
** https://github.com/au5ton/node-gradespeed
**
*/

//Credit: http://stackoverflow.com/a/26227660

module.exports.HOST = 'https://apps.houstonisd.org/ParentStudentConnect';
module.exports.LIVE_CHECK = '/PSCHome.aspx';
module.exports.ENV_APP_DATA = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' : '/var/local');
module.exports.APP_PREFS = module.exports.ENV_APP_DATA +'/net.austinj.nodegradespeed';
