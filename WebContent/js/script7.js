/**
 * Md. Shamim Sarker
 */

angular.module("myModule", []).controller("myController", function($scope) {
	var employees = [
		{name: "Shamim", dob: new Date("August 10, 1990"), gender: "Male", salary: 50000.587},
		{name: "Parvez", dob: new Date("February 21, 1992"), gender: "Male", salary: 50000},
		{name: "Urmi", dob: new Date("August 17, 1989"), gender: "Female", salary: 50000},
		{name: "Sohan", dob: new Date("February 8, 1990"), gender: "Male", salary: 50000}
	];
	$scope.employees = employees;
	$scope.n = 2;
});