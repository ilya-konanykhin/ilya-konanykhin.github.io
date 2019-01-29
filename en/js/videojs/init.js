(function() {
  $.widget('portalturan.videoPlayer', {
    widgetEventPrefix: 'video_player:',
    _create: function() {
      this._videoId = this.element.data('video-id');
      this._countableType = this.element.data('countable-type');
      this._player = videojs(this._videoId);
      this._finishPercent = 95;
      this._counterRequest('open');
      return this._bind();
    },
    _counterRequest: function(action) {
      return window.counterRequest(this._countableType + "." + action, this._videoId);
    },
    _percentTime: function() {
      return (this._player.duration().toFixed(0) * this._finishPercent / 100).toFixed(0);
    },
    _currentTime: function() {
      return this._player.currentTime().toFixed(0);
    },
    pause: function() {
      return this._player.pause();
    },
    _bind: function() {
      this._player.on('play', (function(_this) {
        return function() {
          return _this._trigger('play', null, null);
        };
      })(this));
      this._player.one('play', (function(_this) {
        return function() {
          return _this._counterRequest('play');
        };
      })(this));
      this._player.on('timeupdate', (function(_this) {
        return function() {
          if (_this._player.ads._inLinearAdMode || _this._player.finished) {
            return;
          }
          if (_this._percentTime() === _this._currentTime()) {
            _this._player.finished = true;
            return _this._counterRequest('finish');
          }
        };
      })(this));
      this._player.ads();
      this._player.on('readyforpreroll', (function(_this) {
        return function() {
          _this._player.ads.startLinearAdMode();
          return _this._player.src('/media/samples/video/rek/Bladeless Fan On Table.mp4');
        };
      })(this));
      this._player.one('adplaying', (function(_this) {
        return function() {
          return _this._player.trigger('ads-ad-started');
        };
      })(this));
      this._player.one('adended', (function(_this) {
        return function() {
          return _this._player.ads.endLinearAdMode();
        };
      })(this));
      return this._player.trigger('adsready');
    }
  });

  $.widget('portalturan.videoCollection', {
    _create: function() {
      this._players = this.element.find('.video').videoPlayer();
      return this._bind();
    },
    _bind: function() {
      return this._players.on('video_player:play', (function(_this) {
        return function(e) {
          return _this._players.not($(e.currentTarget)).videoPlayer('pause');
        };
      })(this));
    }
  });

  $(function() {
    return $('body').videoCollection();
  });

}).call(this);
