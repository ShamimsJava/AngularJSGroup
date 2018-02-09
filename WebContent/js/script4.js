/**
 * Md. Shamim Sarker
 */

angular.module("myModule", []).controller("myController", function($scope) {
	var employee = {
			firstName: "Shamim",
			lastName: "Sarker",
			age: 27
	};
	
	$scope.employee = employee;
});