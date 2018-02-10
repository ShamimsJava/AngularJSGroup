/**
 * Md. Shamim Sarker
 */

angular.module("myModule", []).controller("myController", function($scope) {
	var technologis = [
		{name: "Java", likes: 0, dislikes: 0},
		{name: "JavaScript", likes: 0, dislikes: 0},
		{name: "PlSql", likes: 0, dislikes: 0},
		{name: "Sql", likes: 0, dislikes: 0}
	];
	
	$scope.technologis = technologis;
	
	$scope.incrementLikes = function(tech) {
		tech.likes++;
	}
	
	$scope.incrementDislikes = function(tech) {
		tech.dislikes++;
	}
});