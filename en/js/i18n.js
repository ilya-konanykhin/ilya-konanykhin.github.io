(function() {
  $(function() {
    return $(document).on("click", ".lang-icon", function() {
      return localStorage.setItem('lang', $(this).data("lang"));
    });
  });

}).call(this);
