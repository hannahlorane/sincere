app.config(function ($stateProvider) {
  $stateProvider.state('result', {
    /*in real life, this resolution will happen on a results
    page, whose url will be something like:
    '/:styleId/ghostwrites/:lexiconId'*/
    url: '/result/:id',
    templateUrl: 'js/result/result.html',
    controller: 'resultController',
    resolve: {
      author: function(ResultFactory, $stateParams) {
        console.log("resolving author");
        return ResultFactory.getPersonalData($stateParams.id);
      },
      style: function (ResultFactory, $stateParams) {
        console.log('resolving style');
        return ResultFactory.getStyle($stateParams.id);
        //return ResultFactory.addEmmaStyle($stateParams.id);
      },
      lexicon: function (ResultFactory, $stateParams) {
        console.log('resolving lexicon');
        //return ResultFactory.getLexicon($stateParams.id);
        return ResultFactory.addGenesisLexicon($stateParams.id);
      }
    }
  });
});
