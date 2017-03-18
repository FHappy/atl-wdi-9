var Gif = require('./../../models/gif.js');

$(function() {

})

$('.get-gif').on('click', function() {
  $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
    .done(function(data) {
      var giphy = data.data;
      // var giphyAPI = JSON.parse(giphy);
      // var imageUrl = giphyAPI.data.image_url;
      var imageUrl = giphy.image_url;
      console.log(imageUrl);
      // var imageUrl = giphy.image_url;
      // console.log(imageUrl);
// manipulate dom
      $('.image-jumbotron').attr('src', imageUrl);
    });
  //manipulate dom now
});

$('.save-gif').on('click', function() {
  var gifUrl = $('.image-jumbotron').attr('src');
  console.log(gifUrl);
  var creationDate = new Date();
  var updatedDate = new Date();
  var newGif = new Gif ({
    url: gifUrl,
    created_at: creationDate,
    updated_at: updatedDate
  });
  newGif.save();
});
