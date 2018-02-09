/**
 * Md. Shamim Sarker
 */

angular.module("myModule", []).controller("myController", function($scope) {
	
	var country = {
			name: "Banladesh",
			capital: "Dhaka",
			flag: "images/bd.png"
	};
	
	$scope.country = country;
});