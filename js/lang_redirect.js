(function() {
  var lang;

  lang = localStorage.getItem('lang');

  if (lang && lang !== 'ru') {
    window.location = '/' + lang + '/';
  }

}).call(this);
