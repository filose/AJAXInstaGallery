module.exports = function(config){
  var accessToken = window.location.hash.substr(1);

  accessToken = accessToken.replace('access_token=', '');

  if(accessToken){
    return accessToken;
  }else{
    window.location.replace('https://api.instagram.com/oauth/authorize/?client_id=' + config.clientId +
      '&redirect_uri=' + config.redirectUri +
      '&response_type=token');
  }
}