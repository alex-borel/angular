app.controller('homeCtrl', function($scope) {
  $scope.name = 'alex';
  $scope.age = 33;
  $scope.add = function () {
    $scope.age = Number($scope.age);
    console.log('Age is:', $scope.age)
  }
})
