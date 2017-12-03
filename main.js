const app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'homeCtrl'
    })
    .when('/post', {
      templateUrl: 'post.html',
      controller: 'postCtrl'

    })
    .when('/files', {
      template: '<h1>Create new files!</h1>'
    })
});

