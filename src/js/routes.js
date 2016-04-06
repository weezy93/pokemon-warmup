app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/', {
    templateUrl: 'partials/main.html',
    controller: 'myController'
  })
  .when('/generatePokemon', {
    templateUrl: '../partials/generatePokemon'
  })
  .when('/generateMove', {
    templateUrl: '../paratials/generateMove'
  });
});
