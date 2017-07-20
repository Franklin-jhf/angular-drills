angular.module('app').controller('Ctrl', function($scope, srvc){
	$scope.arr = srvc.list;
})