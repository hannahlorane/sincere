app.config(function ($stateProvider) {
  $stateProvider.state('author', {
    /*in real life, this resolution will happen on a results
    page, whose url will be something like:
    '/:styleId/ghostwrites/:lexiconId'*/
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
      },
      lexicon: function (AuthorFactory, $stateParams) {
        console.log('resolving lexicon');
        return AuthorFactory.getLexicon($stateParams.id);
        //return AuthorFactory.addGenesisLexicon($stateParams.id);
      }
    }
  });
});
