app.config(function ($stateProvider, AuthorFactory, $stateParams) {
  $stateProvider.state('author', {
    url: '/author/:id',
    templateUrl: 'js/author/author.html',
    controller: 'authorController',
    resolve: {
      author: function(AuthorFactory) {
        return AuthorFactory.getPersonalData($stateParams.id);
      },
    }
  });
});
