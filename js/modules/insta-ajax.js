var $ = require('jquery');

module.exports = function(config){

  var config = {
    userId: config.userId ? config.userId : '',
    clientId: config.clientId ? config.clientId : '',
    redirectUri: config.redirectUri ? config.redirectUri : '',
    callback: config.callback ? config.callback : ''
  }

  var instaAuth = require('../modules/insta-auth');

  var instaToken = instaAuth({
    clientId: config.clientId,
    redirectUri: config.redirectUri
  });

  $.ajax({
    type: 'GET',
    dataType: 'jsonP',
    url: 'https://api.instagram.com/v1/users/' + config.userId + '/media/recent?access_token=' + instaToken,
    success: function(response){
      config.callback(response);
    }
  });

};