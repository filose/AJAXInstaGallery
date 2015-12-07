var $ = require('jquery');

module.exports = function(imageUrls, parentContainerClass){
  imageUrls.forEach(function(imageUrl){
    var galleryItemHtml = '<div class="instagram-gallery__item"><img src="' + imageUrl +
        '" class="instagram-gallery__item__img" alt=""></div>';
    $(parentContainerClass).append(galleryItemHtml);
  });
};