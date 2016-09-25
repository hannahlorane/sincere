app.config(function ($stateProvider) {
  $stateProvider.state('author', {
    url: '/author/:id',
    templateUrl: 'js/author/author.html',
    controller: 'authorController',
    resolve: {
      author: function(AuthorFactory, $stateParams) {
        console.log("resolving author");
        return AuthorFactory.getPersonalData($stateParams.id);
      },
      style: function (AuthorFactory, $stateParams) {
        console.log('resolving style');
        return AuthorFactory.getStyle($stateParams.id);
        //return AuthorFactory.addEmmaStyle($stateParams.id);
      }
    }
  });
});
