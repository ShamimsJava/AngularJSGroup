/**
 * Md. Shamim Sarker
 */

angular.module("myModule", []).controller("myController", function($scope) {
	var employees = [
		{firstName: "Shamim", lastName: "Sarker", gender: "Male", salary: 40000},
		{firstName: "Parvez", lastName: "Hasan", gender: "Male", salary: 50000},
		{firstName: "Sohan", lastName: "Sazal", gender: "Male", salary: 60000},
		{firstName: "Urmi", lastName: "Yesmin", gender: "Female", salary: 70000},
		{firstName: "Megha", lastName: "Sarker", gender: "Female", salary: 80000}
	];
	
	var countries = [
		{
			name: "Bangladesh",
			cities: [
				{name: "Dhaka"},
				{name: "Rangpur"},
				{name: "Barishal"}
			]
		},
		
		{
			name: "India",
			cities: [
				{name: "Delhi"},
				{name: "Mumbai"},
				{name: "Rajstan"}
			]
		},
		
		{
			name: "Pakistan",
			cities: [
				{name: "Karachi"},
				{name: "Lahore"},
				{name: "Abotabad"}
			]
		}
	];
	
	$scope.employees = employees;
	$scope.countries = countries;
});