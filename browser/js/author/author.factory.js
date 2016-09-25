app.factory('AuthorFactory', function ($http) {
  var author = {};
  author.getPersonalData = function (id) {
    return $http.get('/api/author/'+ id + '/data')
      .then(function (author) {
        return author.data;
      });
  };

  // obviously to be generalized to a getStyle
  author.getEmmaStyle = function () {
    return $http.get('/api/flask/emma/style')
    .then(function (style) {
      return style.data
    })
  }
  return author;
});
