/**
 * Md. Shamim Sarker
 */

angular.module("myModule", []).controller("myController", function($scope) {
	
	//creating complex object
	
	var employee = {
			firstName: 'Shamim',
			lastName: 'Sarker',
			age: 27
	};
	
	//attaching object to scope
	
	$scope.employee = employee;
});