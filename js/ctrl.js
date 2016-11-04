(function(angular) {

    'use strict';

	var app = angular.module('ngResumeApp', []);

	app.controller('ResumeAppController',
	    ['$scope', '$timeout', 'langService', function($scope, $timeout, langService) {

	    $scope.currentSection = 'home';

	    $scope.getKey = function(key) {
	    	
	    	return langService.get(key);
	    }
	}]);

})(window.angular);