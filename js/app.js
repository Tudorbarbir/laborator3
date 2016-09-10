var app = angular.module("MyApp", []);
app.controller("TestCtrl",['$scope', '$http', function($scope, $http){     //declaratia acestui controller ,TestCtrl-functie
	$http.get("https://jsonplaceholder.typicode.com/users").then(function(response){
		console.log(response.data);
		$scope.data=response.data;
	})									//declaratia serviciilor					

}]);