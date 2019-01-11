(function() {
  var lang;

  lang = localStorage.getItem('lang');

  if (lang && lang !== 'kz') {
    window.location = '/' + lang + '/';
  }

}).call(this);
