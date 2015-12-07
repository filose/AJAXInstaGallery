module.exports = function(response){
  var data = response.data,
      imageUrls = [];
  data.forEach(function(datum){
    var imageUrl = datum.images.low_resolution.url;
    imageUrls.push(imageUrl);
  });
  return imageUrls;
}