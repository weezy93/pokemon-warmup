app.controller('myController', ['$scope', '$http', '$location', 'PokemonService', function($scope, $http, $location, PokemonService) {
  $scope.pokemon = {name: '', image: ''};
  $scope.action = {};
  $scope.loadingName = true;
  $scope.loadingMove = true;


  PokemonService.generatePokemon().then(function (result) {
    console.log('data', result.data);
    $scope.pokemon.name = result.data.name;
    $scope.pokemon.image = result.data.sprites.front_default;
    $scope.loadingName = false;
  });

  PokemonService.generateMove().then(function (result) {
    $scope.move = result.data.names[0].name;
    $scope.loadingMove = false;
  });

}])
.service('PokemonService', ['$http', function ($http) {
  return {
    generatePokemon: function () {
      var random = Math.floor(Math.random() * 720) +1;
      return $http({
        url: 'http://pokeapi.co/api/v2/pokemon/' + random + '/',
        method: 'GET'
      });
    },
    generateMove: function () {
      var random = Math.floor(Math.random() * 639) + 1;
      return $http({
        url: 'http://pokeapi.co/api/v2/move/' + random + '/',
        method: 'GET'
      });
    }
  };
}]);
