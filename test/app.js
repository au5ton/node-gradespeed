'use strict';

var api = require('../index.js');
var client = require('au5ton-logger');

const login = {
    user: process.argv[2],
    pass: process.argv[3]
};

api.auth.authenticate(login.user, login.pass, function(status){

    client.log(status);

},true);
