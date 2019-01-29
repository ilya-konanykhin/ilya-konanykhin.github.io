(function() {
  var countableId, countableType;

  countableType = $('html').data('countable-type');

  countableId = $('html').data('countable-id');

  window.counterRequest = function(countableType, countableId) {
    if (countableType && countableId) {
      return $.ajax({
        url: "http://localhost:9292/counter?lang_id=kz&countable_type=" + countableType + "&countable_id=" + countableId
      });
    }
  };

  window.counterRequest(countableType, countableId);

}).call(this);
