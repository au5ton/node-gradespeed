const request = require('request');
const client = require('au5ton-logger');
const cheerio = require('cheerio');

const BASE_URL = 'https://apps.houstonisd.org/ParentStudentConnect/';

client.log('Requesting: ', BASE_URL);
request(BASE_URL, function(error, response, body) {
    //client.log('error? ', error, ' status: ', response.statusCode);
    //client.log('set-cookie: ', response.headers['set-cookie']);
    //client.log('\nRequesting: ', BASE_URL + 'login.aspx');

    let username = 'removed';
    let password = 'removed';

    let $ = cheerio.load(body);

    request({
        url: BASE_URL + 'login.aspx',
        method: 'POST',
        headers: {
            'Cookie': response.headers['set-cookie']
        },
        form: {
            __EVENTTARGET: '',
            __EVENTARGUMENT: '',
            __VIEWSTATE: $('#__VIEWSTATE').attr('value'),
            __VIEWSTATEGENERATOR: $('#__VIEWSTATEGENERATOR').attr('value'),
            __PREVIOUSPAGE: $('#__PREVIOUSPAGE').attr('value'),
            __EVENTVALIDATION: $('#__EVENTVALIDATION').attr('value'),
            ctl00$ContentArea$txtUserName: username,
            ctl00$ContentArea$txtPassword: password,
            ctl00$ContentArea$btnLogin: 'Login'
        }
    }, function(error, response, body) {
        client.log(response.statusCode);
        client.log(response.headers);
        if (response.statusCode === 302) {
            client.success('Logged in as ', username);
        } else if (response.statusCode === 200) {
            client.error('Failed to login as ', username);
            client.error(error);
            //client.log(response.statusCode);
            //client.log(response.headers);
        } else {
            client.error('Unknown error');
            client.error(error);
            //client.log(response.statusCode);
            //client.log(response.headers);
        }
    });

});
