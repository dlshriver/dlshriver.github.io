var app = angular.module('site', [])
	.controller('MainController', function($scope, $http) {
		$http.get('data/projects.json').success(function(data) {
			$scope.projects = data;
		});
	});
