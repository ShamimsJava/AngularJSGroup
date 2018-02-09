/**
 * Md. Shamim Sarker
 */

// creating module
var myApp = angular.module("myModule", []);

//creating controller
var myController = function($scope) {
	$scope.message1 = "AngularJS Trainning 1";
}

//register the controller with the module
myApp.controller("myController", myController);

//controller with register
myApp.controller("myController2", function($scope) {
	$scope.message2 = "I am Shamim Sarker."
});