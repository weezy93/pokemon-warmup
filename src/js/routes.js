app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/generatePokemon', {
    templateUrl: '../partials/generatePokemon',
  })
  .when('/generateMove', {
    templateUrl: '../paratials/generateMove',
  });
});
