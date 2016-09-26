app.controller('resultController', function ($scope, lexicon, style, author, generate) {
  $scope.author = author;
  $scope.style = style;
  $scope.lexicon = lexicon;
  // console.log($scope.lexicon);
  $scope.test = generate($scope.style, $scope.lexicon, 5);
  // console.log($scope.test);
})
