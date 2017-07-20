angular.module('app').controller('Ctrl', function($scope, Srvc){
	$scope.arr = Srvc.list;
	console.log($scope.arr);
});