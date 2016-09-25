app.controller('authorController', function ($scope, AuthorFactory, style, author, generate) {
  console.log('in the controller')
  $scope.author = author;
  $scope.style = style;
  console.log(style);
  $scope.test = generate($scope.style);
  console.log($scope.test);


})
