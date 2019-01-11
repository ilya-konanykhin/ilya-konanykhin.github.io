(function() {
  var lang;

  lang = localStorage.getItem('lang');

  if (lang && lang !== 'en') {
    window.location = '/' + lang + '/';
  }

}).call(this);
