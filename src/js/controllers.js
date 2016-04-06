app.controller('myController', ['$scope', '$http', '$location', function($scope, $http, $location) {

  $scope.greeting = "Hello World!";
  $scope.pokemon = {id: 0, name: '', move: '', image: ''};
  $scope.generatePokemon = false;
  $scope.action = {};


  $scope.action.getPokemon = function () {
    $scope.generatePokemon = true;
    // var pokemon = Math.floor(Math.random() * 721) + 1;
    // var url = 'http://pokeapi.co/api/v2/pokemon/';
     // $http({
    //   method: 'GET',
    //   url: 'url' + pokemon
    // })
    // .then(function(result) {
    //   console.log(result);
    //   $scope.pokemon.id = result.id;
    //   $scope.pokemon.name = result.name;
    // });

  };

  $scope.action.getMove = function () {
  //   var url = 'http://pokeapi.co/api/v2/move/';
  //   var move = Math.fllor(Math.random() * 630) + 1;
  //   $http({
  //     method: 'GET',
  //     url: 'url' + move
  //   })
  //   .then(function(result) {
  //     console.log(result);
  //   });
  };

}]);
