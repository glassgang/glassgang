$(document).ready(function() {

  Foundationify.init();
  $('.video-feature').prepend('<div class="video-background"></div>');
  if (!Modernizr.touch) {
    $('.video-background').videobackground({
        videoSource: [
          ['https://s3.amazonaws.com/fuzz-website/assets/video/of-12.mp4', 'video/mp4'],
          ['https://s3.amazonaws.com/fuzz-website/assets/video/of-12.webm', 'video/webm'],
          ['https://s3.amazonaws.com/fuzz-website/assets/video/of-12.ogv', 'video/ogg']
        ],
        loop: true,
        preload: 'auto',
        resize: false,
        poster: '/assets/video-still.jpg',
        loadedCallback: function() {
          $(this).videobackground('mute');
        }
      });
  }
});
