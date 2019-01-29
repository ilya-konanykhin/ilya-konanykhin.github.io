(function() {
  $(function() {
    $('.jp-jplayer').jPlayer({
      ready: function() {
        return $(this).jPlayer('setMedia', {
          mp3: $(this).data('src')
        });
      },
      play: function() {
        $(this).jPlayer('pauseOthers');
        if (!$(this).data('finished')) {
          window.counterRequest('turan_radio', $(this).data('countable-id'));
          return $(this).data('finished', true);
        }
      },
      swfPath: 'player',
      supplied: 'mp3',
      wmode: 'window',
      globalVolume: true,
      useStateClassSkin: true,
      autoBlur: false,
      smoothPlayBar: true,
      keyEnabled: true
    });
    return $(document).on('click', '.radio-btn', function() {
      var action;
      action = $(this).hasClass('playing') ? 'pause' : 'play';
      $(this).find('.jp-jplayer').jPlayer(action);
      $('.radio-btn').not(this).removeClass('playing');
      return $(this).toggleClass('playing');
    });
  });

}).call(this);
