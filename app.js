const request = require('request');
const client = require('au5ton-logger');

const BASE_URL = 'https://apps.houstonisd.org/ParentStudentConnect/';

const view_state = '/wEPDwUKMTA5MTEzOTQwNA9kFgJmD2QWAgIDD2QWDAIBD2QWAgITDw8WAh4HVmlzaWJsZWhkZAIFDxYCHgRUZXh0BTJDb3B5cmlnaHQgMjAwOSBIb3VzdG9uIEluZGVwZW5kZW50IFNjaG9vbCBEaXN0cmljdGQCDQ8PFgIeC1Bvc3RCYWNrVXJsBSVodHRwOi8vd3d3LmhvdXN0b25pc2Qub3JnL2RvbWFpbi83ODg4ZGQCDw8PFgIfAgUlaHR0cDovL3d3dy5ob3VzdG9uaXNkLm9yZy9kb21haW4vNzg5NGRkAhEPDxYCHwIFJWh0dHA6Ly93d3cuaG91c3RvbmlzZC5vcmcvZG9tYWluLzc4OTVkZAIVDw8WAh4LTmF2aWdhdGVVcmwFMi4uXEhlbHBcT0NSIC0gUFNDIEhlbHAgR3VpZGUgLSBFbmdsaXNoIFZlcnNpb24ucGRmZGQYAQUeX19Db250cm9sc1JlcXVpcmVQb3N0QmFja0tleV9fFgEFC2N0bDAwJGltZ0RMm0Ey3C3ar0egekcZOQC0c7l48OI=';
const generator = '125EDFF6';
const previous_page = 'NrXMyHxDsrdZwzv-YLH-wgRRONMK_5LU1mn8X9YfxsQT7fEqHoIIpOHP_KFnmZxeA0xXVLTXOsdJCXXfkiAs5PaXo73IrV12cYOFeDNQ2upX1Wcl0';
const event_validation = '/wEWCQKgvd/kAwKVjO6OBwLzw+OgBQLA/raSCQKd2bA2ApyI9v8JAv2ao+gDAqebmbQDAujk6qkJMYDDg7djghopwHwUSrLNBw7BSZ8=';

//client.log('Requesting: ', BASE_URL);
request(BASE_URL, function (error, response, body) {
  //client.error(error);
  //client.log('error? ', error, ' status: ', response.statusCode);
  //client.log('set-cookie: ', response.headers['set-cookie']);
  //client.log('\nRequesting: ', BASE_URL+'login.aspx');

  let username = 'removed';
  let password = 'removed';

  request({
      url: BASE_URL+'login.aspx',
      method: 'POST',
      headers: {
          'Cookie': response.headers['set-cookie']
      },
      form: {
          __EVENTTARGET: '',
          __EVENTARGUMENT: '',
          __VIEWSTATE: view_state,
          __VIEWSTATEGENERATOR: generator,
          __PREVIOUSPAGE: previous_page,
          __EVENTVALIDATION: event_validation,
          ctl00$ContentArea$txtUserName: username,
          ctl00$ContentArea$txtPassword: password,
          ctl00$ContentArea$btnLogin: 'Login'
      }
  },function(error, response, body){
      if(response.statusCode === 302) {
          client.success('Logged in as ', username);
      }
      else if(response.statusCode === 200) {
          client.error('Failed to login as ', username);
      }
      else {
          client.error('Unknown error');
          client.error(error);
          client.log(response.statusCode);
          client.log(response.headers);
      }
  });

});
