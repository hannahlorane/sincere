app.factory(AuthorFactory, function ($http) {
  var author = {};
  author.getPersonalData = function (id) {
    return $http.get('/api/author/'+ id + '/data')
      .then(function (author) {
        return author.data;
      });
  };
  return author;
});
