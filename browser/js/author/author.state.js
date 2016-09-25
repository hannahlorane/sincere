app.config(function ($stateProvider) {
  $stateProvider.state('author', {
    url: '/author/:id',
    templateUrl: 'js/author/author.html',
    controller: 'authorController',
    resolve: {
      author: function(AuthorFactory, $stateParams) {
        return AuthorFactory.getPersonalData($stateParams.id);
      },
      emmaStyle: function (AuthorFactory) {
        return AuthorFactory.getEmmaStyle();
      }
    }
  });
});
