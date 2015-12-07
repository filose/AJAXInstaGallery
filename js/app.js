'use strict';

var instaAjax = require('./modules/insta-ajax');

var instaGetImageUrls = require('./modules/insta-get-image-urls');

var instaAddGalleryItem = require('./modules/insta-add-gallery-item');

var images = instaAjax({
  userId: '2311072453',
  clientId: '503ce27595e64e80aef395ea008f52a3',
  redirectUri: 'http://localhost:9001/',  
  callback: function(response){
    var imageUrls = instaGetImageUrls(response);
    instaAddGalleryItem(imageUrls, '.instagram-gallery');
  }
});