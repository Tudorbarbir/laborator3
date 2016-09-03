var app = angular.module("MyApp", []);
app.controller("TestCtrl",['$scope', function($scope){
		$scope.name='Tudor';

		$scope.addName = function(){
			console.log("Button Clicked");
			console.log($scope.firstName);

			$scope.names.push($scope.firstName);
			$scope.firstName="";
		}

		$scope.delete=function(index){
			console.log(index);
			$scope.names.splice(index, 1);
		}

		$scope.names = [
			'carmen', 'ion', 'barbara', 'streissand'
		]
}]);